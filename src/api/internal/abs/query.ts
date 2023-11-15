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
  });
