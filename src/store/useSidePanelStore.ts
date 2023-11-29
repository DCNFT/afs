import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  isLeftPanelExpanded: boolean;
  isRightPanelExpanded: boolean;
};

type Actions = {
  setLeftPanelExpanded: (isExpended: boolean) => void;
  setRightPanelExpanded: (isExpended: boolean) => void;
  reset: () => void;
};

const initialState: State = {
  isLeftPanelExpanded: false,
  isRightPanelExpanded: true,
};

const useSidePanelStore = create<State & Actions>()(
  devtools(
    //persist(
    immer((set) => ({
      ...initialState,
      reset: () => {
        set(initialState);
      },
      setLeftPanelExpanded: (isExpended: boolean) => {
        set((state) => {
          state.isLeftPanelExpanded = isExpended;
        });
      },
      setRightPanelExpanded: (isExpended: boolean) => {
        set((state) => {
          state.isRightPanelExpanded = isExpended;
        });
      },
    })),
    {
      name: 'side-panel-storage',
      storage: createJSONStorage(() => localStorage),
    },
    //),
  ),
);

export default useSidePanelStore;
