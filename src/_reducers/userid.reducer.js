import { userpageConstants } from '../_constants';

export function userid(state = {}, action) {
  switch (action.type) {
    case userpageConstants.USERID_REQUEST:
      return { fetching: true };
    case userpageConstants.USERID_SUCCESS:
      return { ...action.user };
    case userpageConstants.USERID_FAILURE:
      return {};
    default:
      return state;
  }
}
