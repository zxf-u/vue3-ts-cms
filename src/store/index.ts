import { createStore, useStore as useVuexStore, Store } from 'vuex'

import { IRootState } from './type'
import { IStoreType } from './type'

import loginModule from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'why',
      age: 18
    }
  },
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
