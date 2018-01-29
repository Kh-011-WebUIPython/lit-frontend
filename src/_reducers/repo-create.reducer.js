import { repoConstants } from '../_constants';

export function repoCreate(state = {}, action) {
  switch (action.type) {
    case repoConstants.CREATE_REQUEST:
      return { creating: true };
    case repoConstants.CREATE_SUCCESS:
      return { repo: action.repo };
    case repoConstants.CREATE_FAILURE:
      return {};
    case repoConstants.CREATE_CLEAR:
      return {};
    default:
      return state;
  }
}
