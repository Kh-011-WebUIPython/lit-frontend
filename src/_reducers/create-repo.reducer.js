import {repoConstants} from '../_constants';

export function repoCreation(state = {}, action) {
    switch (action.type) {
        case repoConstants.CREATION_REQUEST:
            return {creating: true};
        case repoConstants.CREATION_SUCCESS:
            return {repo: action.repo};
        case repoConstants.CREATION_FAILURE:
            return {};
        default:
            return state
    }
}