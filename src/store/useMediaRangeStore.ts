import {
  DEFAULT_RANGE_MIN,
  DEFAULT_RANGE_MAX,
  DEFAULT_RANGE_HANDLER_WIDTH,
} from '@/constants/default';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  startRange: number;
  endRange: number;
  timelineScale: number;
  startSyncHitArea: boolean;
  startSyncResizeHandle: boolean;
};

type Actions = {
  setStartRange: (startRange: number) => void;
  setEndRange: (endRange: number) => void;
  setStartSyncHitArea: (sync: boolean) => void;
  setStartSyncResizeHandle: (sync: boolean) => void;
  reset: () => void;
};

const initialState: State = {
  startRange: DEFAULT_RANGE_MIN,
  endRange: DEFAULT_RANGE_MAX - DEFAULT_RANGE_HANDLER_WIDTH,
  startSyncHitArea: false,
  startSyncResizeHandle: false,
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

        setStartSyncHitArea(sync: boolean) {
          set((state) => {
            state.startSyncHitArea = sync;
          });
        },

        setStartSyncResizeHandle(sync: boolean) {
          set((state) => {
            state.startSyncResizeHandle = sync;
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
