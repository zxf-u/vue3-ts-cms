import xfRequest from '../index'

import { IAccount } from './type'

enum LoginAPI {
  accountLogin = '/login',
  requestUserInfo = '/users/',
  requestUserMenus = '/role/' // 用法: role/1/menu
}

export function accountLogin<T>(account: IAccount) {
  return xfRequest.post<T>({
    url: LoginAPI.accountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return xfRequest.get({
    url: LoginAPI.requestUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return xfRequest.get({
    url: LoginAPI.requestUserMenus + id + '/menu',
    showLoading: false
  })
}
