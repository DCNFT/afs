import { Template } from '@/api/internal/creatomate/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  selectedTemplate: Template;
};

type Actions = {
  reset: () => void;
  setSelectedTemplate: (template: Template) => void;
};

const initialState: State = {
  selectedTemplate: {} as Template,
};

const useTemplateStore = create<State & Actions>()(
  devtools(
    persist(
      immer((set) => ({
        ...initialState,
        reset: () => {
          set(initialState);
        },
        setSelectedTemplate: (template: Template) => {
          set((state) => {
            state.selectedTemplate = template;
          });
        },
      })),
      {
        name: 'template-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useTemplateStore;
