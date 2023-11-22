import { UseModalProps } from '@/hooks/useModal';
import ModalRoot from './baseModal/ModalRoot';
import Modal from './baseModal/Modal';
const DummyModal = ({ isOpen, onDismiss }: UseModalProps) => {
  return (
    <>
      <ModalRoot isOpen={isOpen} onDismiss={onDismiss} closeOnOverlayClick>
        <Modal title="더미모달">hi반갑습니다</Modal>
      </ModalRoot>
    </>
  );
};

export default DummyModal;
