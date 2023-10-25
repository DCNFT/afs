import { ModalMap, ModalMeta } from '@/ModalProvider';
import { create } from 'zustand';

interface UseModalStore {
  modal: ModalMap;
  setModalOpen: (id: string, meta?: ModalMeta) => void;
  setModalClose: (id: string, meta?: ModalMeta) => void;
}

const useModalStore = create<UseModalStore>()((set) => ({
  modal: {},
  setModalOpen: (id, meta) =>
    set((state) => ({
      modal: {
        ...state.modal,
        [id]: { id, meta, open: true },
      },
    })),
  setModalClose: (id, meta) =>
    set((state) => ({
      modal: {
        ...state.modal,
        [id]: { id, meta, open: false },
      },
    })),
}));

export default useModalStore;
