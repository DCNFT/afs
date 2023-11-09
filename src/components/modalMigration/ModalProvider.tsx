import { DismissableLayer } from '@radix-ui/react-dismissable-layer';
import { AnimatePresence, LazyMotion, m } from 'framer-motion';
import React, {
  createContext,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { isMobile } from 'react-device-detect';
import { createPortal } from 'react-dom';
// import { Overlay } from '../../components/Overlay';
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
import { Overlay } from '@radix-ui/react-dialog';

const DomMax = () => import('./motionDomMax').then((mod) => mod.default);
const DomAnimation = () =>
  import('./motionDomAnimation').then((mod) => mod.default);

export interface ModalProps {
  isOpen?: boolean;
  onDismiss?: () => void;
  closeOnOverlayClick?: boolean;
  children?: React.ReactNode;
}

type StyledModalWrapperProps = {
  children: React.ReactNode;
  animate: string; // You might want to refine the type based on the specific animations you have
};

export const StyledModalWrapper = ({
  children,
  animate,
}: StyledModalWrapperProps) => (
  <div
    className={`flex flex-col justify-center items-center fixed top-0 right-0 bottom-0 left-0 z-[${1}] will-change-opacity opacity-0 animate-${animate}`}
  >
    {children}
  </div>
);

const ModalProvider: React.FC<React.PropsWithChildren> = ({
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
                    // ref={animationRef}
                    // onAnimationStart={() =>
                    //   animationHandler(animationRef.current)
                    // }
                    {...animationMap}
                    // variants={animationVariants}
                    // transition={{ duration: 0.3 }}
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
      {children}
    </>
  );
};

export default ModalProvider;
