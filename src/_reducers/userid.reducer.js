import { userpageConstants } from '../_constants';

export function userid(state = {}, action) {
  switch (action.type) {
    case userpageConstants.USERID_REQUEST:
      return { fetchingUserinfo: true };
    case userpageConstants.USERID_SUCCESS:
      return { ...action.userinfo };
    case userpageConstants.USERID_FAILURE:
      return {};
    default:
      return state;
  }
}
