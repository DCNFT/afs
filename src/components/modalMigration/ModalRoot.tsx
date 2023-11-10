import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { AnimatePresence, LazyMotion, Variants, m } from 'framer-motion';
import { motion } from 'framer-motion';

import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { isMobile } from 'react-device-detect';
import { createPortal } from 'react-dom';
import Overlay from '@/components/modalMigration/modal/Overlay';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';
import {
  animationHandler,
  animationMap,
  animationVariants,
  appearAnimation,
  disappearAnimation,
} from '@/utils/animationToolkit';
import getPortalRoot from '@/utils/getPortalRoot';
import { Handler } from './types';
import { useModalStore } from '@/store/useModalStore';
import StyledModalWrapper from './modal/StyledModalWrapper';

const DomMax = () => import('./motionDomMax').then((mod) => mod.default);
const DomAnimation = () =>
  import('./motionDomAnimation').then((mod) => mod.default);

export interface ModalProps {
  isOpen?: boolean;
  onDismiss?: () => void;
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
}

const ModalRoot: React.FC<React.PropsWithChildren> = ({
  children,
  ...props
}) => {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeOnOverlayClick = useModalStore(
    (state) => state.closeOnOverlayClick,
  );
  const dismissModal = useModalStore((state) => state.dismissModal);

  const animationRef = useRef<HTMLDivElement>(null);

  useIsomorphicEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    return () => window.removeEventListener('resize', setViewportHeight);
  }, []);

  const handleOverlayDismiss = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (closeOnOverlayClick) {
      dismissModal?.();
    }
  };
  const portal = getPortalRoot();

  return (
    <>
      {portal &&
        createPortal(
          <LazyMotion features={isMobile ? DomMax : DomAnimation}>
            <AnimatePresence>
              {isOpen && (
                <DismissableLayer
                  role="dialog"
                  disableOutsidePointerEvents={false}
                  onEscapeKeyDown={handleOverlayDismiss}
                >
                  <StyledModalWrapper
                    ref={animationRef}
                    onAnimationStart={() =>
                      animationHandler(animationRef.current)
                    }
                    {...animationMap}
                    variants={animationVariants}
                    transition={{ duration: 0.3 }}
                    {...props}
                  >
                    <Overlay onClick={handleOverlayDismiss} />
                    {children}
                  </StyledModalWrapper>
                </DismissableLayer>
              )}
            </AnimatePresence>
          </LazyMotion>,
          portal,
        )}
    </>
  );
};

export default ModalRoot;
