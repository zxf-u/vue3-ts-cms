import { Module } from 'vuex'
import router from '@/router'

import { IAccount, ILoginResult, IDataType } from '@/service/login/type'
import { IRootState } from '../type'
import { LoginState } from './type'

import localCache from '@/utils/cache'

import {
  accountLogin,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login'

import { mapMenusToRoutes } from '@/utils/map-menu'

const loginModule: Module<LoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      console.log(userMenus)
      const routes = mapMenusToRoutes(userMenus)

      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginRes = await accountLogin<IDataType<ILoginResult>>(payload)
      console.log(loginRes.data)
      const { id, token } = loginRes.data
      console.log(id, token)
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2. 获取用户信息
      const userInfoRes = await requestUserInfoById(id)
      const userInfo = userInfoRes.data
      console.log(userInfo)
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      //3. 获取当前用户的菜单列表
      const userMenusRes = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusRes.data
      console.log(userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (token) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (token) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}
export default loginModule
