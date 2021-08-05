import axios from 'axios';
import { timeout } from './config';
import {
  FailStatusCodeInterceptor,
  SuccessStatusCodeInterceptor,
} from './response-interceptors/status-code-interceptor';
import { IDataResType } from './type';
export const request = axios.create({
  timeout: timeout,
  withCredentials: true,
});
export const CancelToken = axios.CancelToken;
export const isCancel = axios.isCancel;

request.interceptors.response.use(
  SuccessStatusCodeInterceptor,
  FailStatusCodeInterceptor,
);

// base request
enum ERequestType {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  DELETE = 'delete',
}
const baseRequest = (type: ERequestType) => <R = IDataResType<string>, P = {}>(
  url: string,
  params?: P,
) => {
  if (type === ERequestType.GET || type === ERequestType.DELETE) {
    return request[type]<R>(url).then(res => res.data);
  }
  return request[type]<R>(url, params).then(res => res.data);
};

export const baseGet = baseRequest(ERequestType.GET);
export const basePost = baseRequest(ERequestType.POST);
export const baseDelete = baseRequest(ERequestType.DELETE);
