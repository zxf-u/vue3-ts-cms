import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XFRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface XFRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XFRequestInterceptor<T>
  showLoading?: boolean
}
