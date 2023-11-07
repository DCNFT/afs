import { SERVER_URL } from '@/api/domain';
import { TemplateListResponse } from './types';
import { httpService } from '@/module/http';

export async function templateList() {
  return await httpService.get<TemplateListResponse>(
    `https://api.creatomate.com/v1/templates`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    },
  );
}

export async function templateDetail(templateId: string) {
  const response = await httpService.get<any>('/creatomate/template/detail', {
    params: {
      templateId,
    },
  });
  return response.data;
}

export async function videoInfo(id: string) {
  const response = await httpService.get<any>('/creatomate/video/info', {
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
  const response = await httpService.post<any>('/creatomate/video/edit', data);
  return response.data;
}
