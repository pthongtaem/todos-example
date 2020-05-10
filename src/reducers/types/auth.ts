// Actions
export const LOGIN_SUCCESS = 'todos/auth/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'todos/auth/LOGIN_FAIL';
export const LOGOUT = 'todos/auth/LOGOUT';

export interface AuthState {
  isLoggedIn: boolean;
  name: string | null;
  error: string | null;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  name: string;
}

export interface LoginFailAction {
  type: typeof LOGIN_FAIL;
  error: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LoginFailAction
  | LogoutAction;
