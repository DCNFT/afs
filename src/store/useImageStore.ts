import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = { selectedImage: string };

type Actions = {
  reset: () => void;
  setSelectedImage: (image: string) => void;
};

const initialState: State = {
  selectedImage: '',
};

const useImageStore = create<State & Actions>()(
  devtools(
    // persist(
    immer((set) => ({
      ...initialState,
      reset: () => {
        set(initialState);
      },
      setSelectedImage: (selectedImage: string) => {
        set((state) => {
          state.selectedImage = selectedImage;
        });
      },
    })),
    // {
    //   name: 'postRecommendHistory-storage',
    //   storage: createJSONStorage(() => localStorage),
    // },
    // ),
  ),
);

export default useImageStore;
