export interface User {
    username: string
    password?: string
    remember:boolean
    [key: string]: any;
  }

  
  export enum LoginActionTypes {
    LOGIN_REQUEST = '@@login/FETCH_REQUEST',
    LOGIN_SUCCESS = '@@login/FETCH_SUCCESS',
    LOGIN_FAILURE = '@@login/FETCH_ERROR',
    SIGNUP_REQUEST = '@@signup/CREATE_REQUEST',
    SIGNUP_SUCCESS = '@@signup/CREATE_SUCCESS',
    SIGNUP_FAILURE = '@@signup/FETCH_ERROR',
    LOGOUT='@@login/LOGOUT',
  }

  export interface LoginState {
    readonly loading: boolean
    readonly data: User[]
    readonly errors?: string
  }