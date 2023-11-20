import { Template } from '@/api/internal/creatomate/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  selectedTemplate: Template;
  templateData: any;
};

type Actions = {
  reset: () => void;
  setSelectedTemplate: (template: Template) => void;
  // 액션: 템플릿 데이터 설정
  setTemplateData: (data: any) => void;
};

const initialState: State = {
  selectedTemplate: {} as Template,
  templateData: null,
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
        // 액션: 템플릿 데이터 설정
        setTemplateData: (data) => set({ templateData: data }),
      })),
      {
        name: 'template-storage',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  ),
);

export default useTemplateStore;
