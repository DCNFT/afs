//import axios from './apiClient';
import axios from '@/api';
import { TemplateListResponse } from './types';

export async function templateList() {
  //   const data = {
  const response = await axios.get<TemplateListResponse>(
    '/creatomate/template/list',
  );
  return response.data;
}

export async function templateDetail(templateId: string) {
  const response = await axios.get<any>('/creatomate/template/detail', {
    params: {
      templateId,
    },
  });
  return response.data;
}

export async function videoInfo(id: string) {
  const response = await axios.get<any>('/creatomate/video/info', {
    params: {
      id,
    },
  });
  return response.data;
}

export async function videoEdit(templateId: string, modificationsData: any) {
  const data = {
    templateId,
    data: {
      ...modificationsData,
    },
  };
  const response = await axios.post<any>('/creatomate/video/edit', data);
  return response.data;
}
