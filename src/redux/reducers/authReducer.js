import {
  USER_AUTHENTICATED_REQUEST,
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  USER_AUTHENTICATED_REQUEST_FAIL
} from '../constants/authConstants';

const initialState = {
  loading: false,
  authenticated: false,
  token: '',
  error: ''
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED_REQUEST:
      return {
        ...state,
        loading: true,
        authenticated: false
      };
    case USER_AUTHENTICATED:
      return {
        ...state,
        loading: false,
        authenticated: true,
        token: action.payload
      };
    case USER_UNAUTHENTICATED:
      return {
        ...state,
        loading: true,
        token: false
      };
    case USER_AUTHENTICATED_REQUEST_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
