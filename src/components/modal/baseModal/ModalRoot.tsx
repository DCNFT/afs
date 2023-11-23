import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { AnimatePresence, LazyMotion } from 'framer-motion';
import React, { useCallback, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import { createPortal } from 'react-dom';
import Overlay from '@/components/modal/baseModal/Overlay';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';
import { animationHandler, animationVariants } from '@/utils/animationToolkit';
import getPortalRoot from '@/utils/getPortalRoot';
import { useModalStore } from '@/store/useModalStore';
import StyledModalWrapper from './StyledModalWrapper';

const DomMax = () => import('./motionDomMax').then((mod) => mod.default);
const DomAnimation = () =>
  import('./motionDomAnimation').then((mod) => mod.default);

export interface ModalProps {
  isOpen?: boolean;
  onDismiss?: () => void;
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
}

const ModalRoot: React.FC<React.PropsWithChildren & ModalProps> = ({
  children,
  isOpen,
  onDismiss,
  closeOnOverlayClick,
  ...props
}) => {
  const animationRef = useRef<HTMLDivElement>(null);

  useIsomorphicEffect(() => {
    const setViewportHeight = () => {
      const vh = window?.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window?.addEventListener('resize', setViewportHeight);
    return () => window?.removeEventListener('resize', setViewportHeight);
  }, []);

  const handleOverlayDismiss = useCallback(
    (e: any) => {
      e.stopPropagation();
      e.preventDefault();
      if (closeOnOverlayClick) {
        onDismiss?.();
      }
    },
    [closeOnOverlayClick, onDismiss],
  );

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
                    variants={animationVariants}
                    transition={{ duration: 0.5 }}
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
