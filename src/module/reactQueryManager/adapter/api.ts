import type { ResponseType, RequestConfigType } from '../types/httpTypes';

import { httpService } from '../../http/index';

// const token = {
//   accessToken: 'accessToken test', // 서버에서 세션으로 관리한다 하여 우선은 냅둠
//   refreshToken: 'refreshToken test', // 추후 삭제 예정
// };

export const api = {
  get: <T>(url: string, params?: RequestConfigType) =>
    httpService.get<T>(url, {
      ...params,
      //token
    }),

  post: <T, S>(url: string, data: T | S, params?: RequestConfigType) =>
    httpService.post<ResponseType<S>, T | S>(url, data, {
      ...params,
      //token,
    }),

  patch: <T, S>(url: string, data: T | S, params?: RequestConfigType) =>
    httpService.patch<ResponseType<S>, T | S>(url, data, {
      ...params,
      //token,
    }),

  delete: <T>(url: string, params?: RequestConfigType) =>
    httpService.delete<T>(url, {
      ...params,
      //token
    }),
};
