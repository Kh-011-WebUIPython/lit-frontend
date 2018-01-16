import {repoConstants} from '../_constants';


export function repos(state = {}, action) {
    switch (action.type) {
        case repoConstants.GET_BY_USER_REQUEST:
            return {fetchingRepos: true};
        case repoConstants.GET_BY_USER_SUCCESS:
            return {...action.repos};
        case repoConstants.GET_BY_USER_FAILURE:
            return {};
        default:
            return state
    }
}