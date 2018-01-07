import {userConstants} from '../_constants';

export function _delete(state = {}, action) {
    switch (action.type) {
        case userConstants.DELETE_REQUEST:
            return {deleting: true};
        case userConstants.DELETE_SUCCESS:
            return {};
        case userConstants.DELETE_FAILURE:
            return {};
        default:
            return state
    }
}