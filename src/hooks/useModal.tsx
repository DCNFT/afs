// ./components/modal/useModal.ts

import { useCallback } from 'react';
import useModalStore from '@/store/useModalStore';
import { ModalMeta } from 'app/ModalProvider';

export function useModal(modalFileName = '') {
  const { modal, setModalOpen, setModalClose } = useModalStore();
  /* eslint-disable react-hooks/exhaustive-deps */
  const onOpen = useCallback(
    (meta?: ModalMeta) => setModalOpen(modalFileName, meta),
    [modalFileName],
  );
  const onClose = useCallback(
    (meta?: ModalMeta) => setModalClose(modalFileName, meta),
    [modalFileName],
  );
  /* eslint-enable react-hooks/exhaustive-deps */

  const isOpen = modal[modalFileName]?.open;

  const getOpenModalsList = useCallback(() => {
    return Object.keys(modal).filter((modalId) => modal[modalId].open);
  }, [modal]);

  const getModalMeta = useCallback(() => {
    return modal[modalFileName].meta;
  }, [modal, modalFileName]);

  return {
    isOpen,
    onOpen,
    onClose,
    getOpenModalsList,
    getModalMeta,
  };
}
