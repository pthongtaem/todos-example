import {
  AuthState,
  AuthActionTypes,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LoginSuccessAction,
  LoginFailAction,
  LogoutAction,
} from './types/auth';

const initialState: AuthState = {
  isLoggedIn: false,
  name: null,
  error: null,
};

// Reducer
export default function reducer(
  state = initialState,
  action: AuthActionTypes,
): AuthState {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, isLoggedIn: true, name: action.name, error: null };
    case LOGIN_FAIL:
      return { ...state, isLoggedIn: false, name: null, error: action.error };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return { ...state };
  }
}

// Action Creators
export function loginSuccess(name: string): LoginSuccessAction {
  return { type: LOGIN_SUCCESS, name };
}

export function loginFail(error: string): LoginFailAction {
  return { type: LOGIN_FAIL, error };
}

export function logout(): LogoutAction {
  return { type: LOGOUT };
}
