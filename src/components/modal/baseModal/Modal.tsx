import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import { ModalWrapper } from './ModalWrapper';
import { useModalStore } from '@/store/useModalStore';
import { ModalBackButton, ModalCloseButton } from './ModalButtons';

const Modal: React.FC<React.PropsWithChildren<any>> = ({
  title,
  onDismiss: onDismiss_,
  onBack,
  children,
  hideCloseButton = false,
  headerPadding = 'px-[12px] py-[24px]',
  bodyPadding = '24px',
  headerBackground = 'transparent',
  minWidth = '320px',
  headerRightSlot,
  bodyAlignItems,
  headerBorderColor = 'border-gray-400',
  bodyTop = '0px',
  ...props
}) => {
  const onDismiss = useModalStore((state) => state.onDismiss) || onDismiss_;

  return (
    <ModalWrapper
      minWidth={minWidth}
      onDismiss={onDismiss}
      hideCloseButton={hideCloseButton}
      {...props}
    >
      <ModalHeader
        background={'bg-white'}
        p={headerPadding}
        headerBorderColor={headerBorderColor}
      >
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <p className="font-bold text-2xl">{title}</p>
        </ModalTitle>
        {headerRightSlot}
        {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
      </ModalHeader>
      <ModalBody
        position="relative"
        top={bodyTop}
        onPointerDownCapture={(e: any) => e.stopPropagation()}
        p={bodyPadding}
        style={{ alignItems: bodyAlignItems ?? 'normal' }}
      >
        {children}
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
