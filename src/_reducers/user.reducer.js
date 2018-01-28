import { userConstants, userpageConstants } from '../_constants';

export function user(state = {}, action) {
  switch (action.type) {
    case userpageConstants.USER_REQUEST:
      return { fetching: true };
    case userpageConstants.USER_SUCCESS:
      return { ...action.user };
    case userpageConstants.USER_FAILURE:
      return {};
    case userConstants.SIGNOUT:
      return {};
    case userConstants.DELETE_REQUEST:
      return { deleting: true };
    case userConstants.DELETE_SUCCESS:
      return {};
    case userConstants.DELETE_FAILURE:
      return {};
    default:
      return state;
  }
}
