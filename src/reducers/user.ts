import { UserState, UserActionTypes, CLEAR_AUTH } from './types/user';

const initialState: UserState = {
  token: null,
  refreshToken: null,
};

// Reducer
export default function reducer(
  state = initialState,
  action: UserActionTypes,
): UserState {
  switch (action.type) {
    case CLEAR_AUTH:
      return {
        ...state,
        token: null,
        refreshToken: null,
      };
    default:
      return state;
  }
}

// Action Creators
export function clearAuth() {
  return { type: CLEAR_AUTH };
}
