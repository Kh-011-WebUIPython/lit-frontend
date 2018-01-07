import {userConstants, userpageConstants} from '../_constants';


export function userinfo(state = {}, action) {
    switch (action.type) {
        case userpageConstants.USERINFO_REQUEST:
            return {fetchingUserinfo: true};
        case userpageConstants.USERINFO_SUCCESS:
            return {...action.userinfo};
        case userpageConstants.USERINFO_FAILURE:
            return {};
        case userConstants.SIGNOUT:
            return {};
        default:
            return state
    }
}