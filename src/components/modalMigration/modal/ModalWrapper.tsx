import useMatchBreakpoints from '@/components/MatchBreakpoints/useMatchBreakpoints';
import { useRef } from 'react';
import ModalContainer from './ModalContainer';
export const MODAL_SWIPE_TO_CLOSE_VELOCITY = 300;
export const ModalWrapper = ({
  children,
  onDismiss,
  hideCloseButton,
  ...props
}: any) => {
  const { isMobile } = useMatchBreakpoints();
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    // @ts-ignore
    <ModalContainer
      drag={isMobile && !hideCloseButton ? 'y' : false}
      dragConstraints={{ top: 0, bottom: 600 }}
      dragElastic={{ top: 0 }}
      dragSnapToOrigin
      onDragStart={() => {
        if (wrapperRef.current) wrapperRef.current.style.animation = 'none';
      }}
      // @ts-ignore
      onDragEnd={(e, info) => {
        if (info.velocity.y > MODAL_SWIPE_TO_CLOSE_VELOCITY && onDismiss)
          onDismiss();
      }}
      ref={wrapperRef}
      style={{ overflow: 'visible' }}
    >
      <div style={{ overflow: 'hidden', borderRadius: '32px' }} {...props}>
        {children}
      </div>
    </ModalContainer>
  );
};
