import {userConstants} from '../_constants';

export function update(state = {}, action) {
    switch (action.type) {
        case userConstants.UPDATE_REQUEST:
            return {updating: true};
        case userConstants.UPDATE_SUCCESS:
            return {};
        case userConstants.UPDATE_FAILURE:
            return {};
        default:
            return state
    }
}