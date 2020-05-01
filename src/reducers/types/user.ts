export const CLEAR_AUTH = 'ori-portal/user/CLEAR_AUTH';

export interface UserState {
  token: string | null;
  refreshToken: string | null;
}

export interface ClearAuthAction {
  type: typeof CLEAR_AUTH;
}

export type UserActionTypes = ClearAuthAction;
