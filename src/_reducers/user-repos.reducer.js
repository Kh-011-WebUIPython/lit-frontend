import { repoConstants } from '../_constants';

export function userRepos(state = {}, action) {
  switch (action.type) {
    case repoConstants.GET_BY_USER_REQUEST:
      return { fetching: true };
    case repoConstants.GET_BY_USER_SUCCESS:
      return { ...action.userRepos };
    case repoConstants.GET_BY_USER_FAILURE:
      return {};
    default:
      return state;
  }
}
