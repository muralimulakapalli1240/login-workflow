import { LoginActionTypes } from '../types'

let user: any = { username: "user", password: "demo" };
const data: any = { loggedIn: true, username: user.username, password: user.password };

export const authStore = {
  data: data,
  errors: false,
  loading: false,
}
export const loginReducer = (state = authStore, action: any) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST: {
      return { ...state, loading: true, errors: false }
    }
    case LoginActionTypes.LOGIN_SUCCESS: {
      const { username, password } = action.data
      if (username === user.username && password === user.password) {
        return { ...state, loading: false, data: {...state.data,loggedIn: true}, loggedIn: true, errors: false }
      }
      else {
        return { ...state, loading: false, errors: true,data: {...state.data,loggedIn: true} }
      }
    }
    case LoginActionTypes.LOGIN_FAILURE: {
      return { ...state, loading: false, errors: action.payload }
    }
    case LoginActionTypes.LOGOUT: {
      state.data.loggedIn=false
      return { ...state, loading: false, loggedIn: false, errors: false }
    }
    default: {
      return state
    }
  }
}

