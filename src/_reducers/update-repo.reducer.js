import { repoConstants } from '../_constants';

export function repoUpdate(state = {}, action) {
  switch (action.type) {
    case repoConstants.UPDATE_DESCRIPTION_REQUEST:
      return { updating: true };
    case repoConstants.UPDATE_DESCRIPTION_SUCCESS:
      return { updated: true };
    case repoConstants.UPDATE_DESCRIPTION_FAILURE:
      return {};
    case repoConstants.UPDATE_DESCRIPTION_CLEAR:
      return {};
    default:
      return state;
  }
}
