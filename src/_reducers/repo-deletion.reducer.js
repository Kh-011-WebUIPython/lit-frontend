import { repoConstants } from '../_constants';

export function deleteRepo(state = {}, action) {
  switch (action.type) {
    case repoConstants.DELETE_REQUEST:
      return { deleting: true };
    case repoConstants.DELETE_SUCCESS:
      return { deleted: true};
    case repoConstants.DELETE_FAILURE:
      return {};
    case repoConstants.DELETE_CLEAR:
      return {};
    default:
      return state;
  }
}
