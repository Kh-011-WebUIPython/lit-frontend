import { checkConstants } from '../_constants';

export function check(state = {}, action) {
  switch (action.type) {
    case checkConstants.USER_AND_REPO_REQUEST:
      return { fetching: true };
    case checkConstants.USER_AND_REPO_SUCCESS:
      return {};
    case checkConstants.USER_AND_REPO_FAILURE:
      return { failed: true };
    default:
      return state;
  }
}
