import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  startRange: number;
  endRange: number;
  timelineScale: number;
};

type Actions = {
  setStartRange: (startRange: number) => void;
  setEndRange: (endRange: number) => void;

  reset: () => void;
};

const initialState: State = {
  startRange: 0,
  endRange: 0,
  timelineScale: 100,
};

const useMediaRangeStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialState,
        setStartRange(startRange: number) {
          set((state) => {
            state.startRange = startRange;
          });
        },

        setEndRange(endRange: number) {
          set((state) => {
            state.endRange = endRange;
          });
        },

        reset: () => {
          set(initialState);
        },
      })),
      {
        name: 'postRecommendHistory-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useMediaRangeStore;
