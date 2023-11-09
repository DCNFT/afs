import { Heading } from '@radix-ui/themes';
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
  headerPadding = '12px 24px',
  bodyPadding = '24px',
  headerBackground = 'transparent',
  minWidth = '320px',
  headerRightSlot,
  bodyAlignItems,
  headerBorderColor,
  bodyTop = '0px',
  ...props
}) => {
  const onDismiss = useModalStore((state) => state.dismissModal);

  return (
    <ModalWrapper
      minWidth={minWidth}
      onDismiss={onDismiss}
      hideCloseButton={hideCloseButton}
      {...props}
    >
      <ModalHeader
        background={''}
        p={headerPadding}
        headerBorderColor={headerBorderColor}
      >
        <ModalTitle>
          {onBack && <ModalBackButton onBack={onBack} />}
          <Heading>{title}</Heading>
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
