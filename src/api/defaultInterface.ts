export interface ApiResponse<T> {
  if_id: string;
  version: string;
  mcode: string;
  scode: string;
  result: string;
  reason: string;
  field: string;
  tx_id: null | string;
  server_time: string;
  response_time: string;
  data: T;
}
