import { SERVER_URL } from '@/api/domain';
import { useFetch } from '@/module/reactQueryManager';
import { TemplateListApiResponse, TemplateInfoResponse } from './types';

export const useTemplateList = () =>
  useFetch<TemplateListApiResponse>({
    url: `${SERVER_URL}/abs/v1/video/template/list`,
    params: {
      if_id: 'IF-1120-001',
      version: '1.0',
      mcode: '1100',
      scode: '1120',
    },
  });

export const useTemplateInfo = (template_id: string) =>
  useFetch<TemplateInfoResponse>({
    url: `${SERVER_URL}/abs/v1/video/template/info`,
    params: {
      if_id: 'IF-1120-002',
      version: '1.0',
      mcode: '1100',
      scode: '1120',
      template_id,
    },
    customCondition: !!template_id,
  });

export const useVideoInfo = (templateId: string, videoId: string) =>
  useFetch<TemplateListApiResponse>({
    url: `${SERVER_URL}/abs/v1/video/list`,
    params: {
      if_id: 'IF-1110-001',
      version: '1.0',
      mcode: '1100',
      scode: '1110',
      template_id: templateId,
      video_id: videoId,
    },
  });

export const useVideoUpsert = (templateId: string, videoId: string) =>
  useFetch<TemplateListApiResponse>({
    url: `${SERVER_URL}/abs/v1/video/list`,
    params: {
      if_id: 'IF-1110-003',
      version: '1.0',
      mcode: '1100',
      scode: '1110',
      template_id: templateId,
      video_id: videoId,
    },
  });

export const useVideoList = (userId: string) =>
  useFetch<VideoListApiResponse>({
    url: `${SERVER_URL}/abs/v1/video/list`,
    params: {
      if_id: 'IF-1110-003',
      version: '1.0',
      mcode: '1100',
      scode: '1110',
      user_id: userId || 'TEMP_USER_ID',
    },
  });
