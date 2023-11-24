import { TemplateInfo } from '@/api/internal/abs/types';
import { Template } from '@/api/internal/creatomate/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type checkMedia = {
  mediaName: string;
  isCheck: boolean;
};
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
  checkMediaSetList: checkMedia[];
};

type Actions = {
  reset: () => void;
  setSelectedTemplate: (template: Template) => void;
  // 액션: 템플릿 데이터 설정
  setTemplateData: (data: any) => void;
  setStoreInfo: (data: any) => void;
  setCreateVideoInformation: (data: CreateVideoInformation) => void;
  updateCheckMedia: (media: checkMedia) => void;
};

const initialState: State = {
  selectedTemplate: {} as Template,
  templateData: { info: {} as TemplateInfo },
  checkMediaSetList: [],
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
    //persist(
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

      updateCheckMedia: (media: checkMedia) =>
        set((state) => {
          const index = state.checkMediaSetList.findIndex(
            (item) => item.mediaName === media.mediaName,
          );
          console.log('[seo] updateCheckMedia = ', index);
          if (index === -1) {
            // mediaName이 존재하지 않으면 추가
            state.checkMediaSetList.push(media);
          } else {
            // mediaName이 이미 존재하면 업데이트
            state.checkMediaSetList[index] = media;
          }
          // 중복된 mediaName 제거 (filter를 사용하여 중복 제거)
          state.checkMediaSetList = state.checkMediaSetList.filter(
            (item, i) =>
              state.checkMediaSetList.findIndex(
                (x) => x.mediaName === item.mediaName,
              ) === i,
          );
        }),
    })),
    // {
    //   name: 'template-storage',
    //   storage: createJSONStorage(() => localStorage),
    // },
    //),
  ),
);

export default useTemplateStore;
