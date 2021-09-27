import { LoginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  loginModule: LoginState
}

export type IStoreType = IRootState & IRootWithModule
