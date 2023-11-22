import { SERVER_URL } from '@/api/domain';
import { httpService } from '@/module/http';
import { RetouchRequestParams, TemplateInfo } from './types';

export async function retouch({ data }: RetouchRequestParams) {
  return await httpService.post<any>(
    `${SERVER_URL}/abs/v1/image/retouch`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

export async function upscale({ data }: RetouchRequestParams) {
  return await httpService.post<any>(
    `${SERVER_URL}/abs/v1/image/upscale`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

export async function animation({ data }: RetouchRequestParams) {
  return await httpService.post<any>(
    `${SERVER_URL}/abs/v1/image/animation`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}

export async function upsertVideo({ data }: { data: FormData }) {
  return await httpService.post<any>(
    `${SERVER_URL}/abs/v1/video/upsert`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
}
