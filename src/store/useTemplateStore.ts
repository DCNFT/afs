import { TemplateInfo } from '@/api/internal/abs/types';
import { Template } from '@/api/internal/creatomate/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type StoreData = {
  name: {
    name: string;
    value: string;
  };
  type: string;
  description: string;
  keyword: string;
};
export type CreateVideoInformation = {
  video_name: string;
  video_url: string;
};
type State = {
  selectedTemplate: Template;
  templateData: { info: TemplateInfo };
  storeInfo: StoreData;
  createVideoInformation: CreateVideoInformation;
};

type Actions = {
  reset: () => void;
  setSelectedTemplate: (template: Template) => void;
  // 액션: 템플릿 데이터 설정
  setTemplateData: (data: any) => void;
  setStoreInfo: (data: any) => void;
  setCreateVideoInformation: (data: CreateVideoInformation) => void;
};

const initialState: State = {
  selectedTemplate: {} as Template,
  templateData: { info: {} as TemplateInfo },
  storeInfo: {
    name: {
      name: '',
      value: '',
    },
    type: '',
    description: '',
    keyword: '',
  },
  createVideoInformation: {
    video_name: '',
    video_url: '',
  },
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
        setTemplateData: (data: any) => {
          set((state) => {
            state.templateData = data;
          });
        },
        setStoreInfo: (data: StoreData) => {
          set((state) => {
            state.storeInfo = data;
          });
        },
        setUpdateTemplateData: (store_info: any) => {
          set((state) => {
            state.templateData.info.store_info = store_info;
          });
        },
        setCreateVideoInformation: (data: CreateVideoInformation) => {
          set((state) => {
            state.createVideoInformation = data;
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
