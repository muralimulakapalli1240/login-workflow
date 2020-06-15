import { LoginActionTypes } from '../types'


export const LoginStart = (fields: any) => {
    return {
      type: LoginActionTypes.LOGIN_REQUEST,
      payload: fields
    };
  };
  

  export const LoginUser = (data:any) => {
    return {
      type: LoginActionTypes.LOGIN_SUCCESS,
      data
    };
  };

  export const LoginErrors = (val: any, field: any) => {
    return {
      type: LoginActionTypes.LOGIN_FAILURE,
      payload: { val, field }
    };
  };

  export const LogOut = () => {
    return {
      type: LoginActionTypes.LOGOUT
    };
  };
  

  