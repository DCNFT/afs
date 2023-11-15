import { ApiResponse } from '@/api/defaultInterface';

export type RetouchRequestParams = {
  image_file?: FormData;
  target_width?: number;
  target_height?: number;
  has_scale?: boolean;
  has_animation?: boolean;
  data?: FormData;
};

interface Template {
  id: string;
  name: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

// Template 타입을 사용한 ApiResponse 예시
export type TemplateListApiResponse = ApiResponse<{ list: Template[] }>;
export type TemplateInfoResponse = ApiResponse<{ info: TemplateInfo }>;
export type MediaElement = {
  format: string;
  type: string;
  name: string;
  title: string | null;
  key: string | null;
  description: string | null;
  reference_id: string | null;
  order: number | null;
  elements: Array<MediaElement> | null;
};

export type Composition = {
  duration: number;
  style: string | null;
  media: Array<MediaElement>;
};

export type StoreInfo = {
  name: string;
  type: string;
  description: string;
  keyword: string;
};

export type TemplateInfo = {
  template_id: string;
  store_info: StoreInfo;
  compositions: Array<Composition>;
  vibe: string;
};
