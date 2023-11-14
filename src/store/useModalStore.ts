import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

interface ModalState {
  isOpen: boolean;
  modalNode: React.ReactNode | null;
  nodeId: string;
  closeOnOverlayClick: boolean;
}

interface ModalActions {
  presentModal: (
    node: React.ReactNode,
    nodeId: string,
    closeOverlayClick?: boolean,
  ) => void;
  dismissModal: () => void;
  setModalNode: (node: React.ReactNode) => void;
  setIsOpen: (isOpen: boolean) => void;
  setNodeId: (nodeId: string) => void;
  setCloseOnOverlayClick: (closeOnOverlayClick: boolean) => void;
}

const initialState: ModalState = {
  isOpen: false,
  modalNode: null,
  nodeId: '',
  closeOnOverlayClick: true,
};

export const useModalStore = create<ModalState & ModalActions>()(
  devtools(
    immer((set) => ({
      ...initialState,
      setNodeId(nodeId: string) {
        set((state) => {
          state.nodeId = nodeId;
        });
      },
      setCloseOnOverlayClick(closeOnOverlayClick) {
        set((state) => {
          state.closeOnOverlayClick = closeOnOverlayClick;
        });
      },
      setIsOpen(isOpen: boolean) {
        set((state) => {
          state.isOpen = isOpen;
        });
      },
      presentModal(node, nodeId, closeOverlayClick = true) {
        set((state) => {
          state.isOpen = true;
          state.modalNode = node;
          state.nodeId = nodeId;
          state.closeOnOverlayClick = closeOverlayClick;
        });
      },
      dismissModal() {
        set((state) => {
          state.isOpen = false;
          state.modalNode = null;
          state.nodeId = '';
          state.closeOnOverlayClick = true;
        });
      },
      setModalNode(node: React.ReactNode) {
        set((state) => {
          state.modalNode = node;
        });
      },
    })),
  ),
);
