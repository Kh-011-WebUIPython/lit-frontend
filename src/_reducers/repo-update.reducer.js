import { repoConstants } from '../_constants';

export function repoUpdate(state = {}, action) {
  switch (action.type) {
    case repoConstants.UPDATE_REQUEST:
      return { updating: true };
    case repoConstants.UPDATE_SUCCESS:
      return { updated: true };
    case repoConstants.UPDATE_FAILURE:
      return {};
    case repoConstants.UPDATE_CLEAR:
      return {};
    default:
      return state;
  }
}
