import { userConstants, userpageConstants } from '../_constants';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.SIGNIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userpageConstants.USERINFO_FAILURE:
      return {};
    case userConstants.DELETE_SUCCESS:
      return {};
    case userConstants.SIGNIN_FAILURE:
      return {};
    case userConstants.SIGNOUT:
      return {};
    default:
      return state;
  }
}
