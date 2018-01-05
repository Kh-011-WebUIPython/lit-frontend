import {userConstants, userpageConstants} from '../_constants';


export function userinfo(state = {}, action) {
    switch (action.type) {
        case userpageConstants.USERINFO_REQUEST:
            return {fetchingUserinfo: true};
        case userpageConstants.USERINFO_SUCCESS:
            return {...action.userinfo};
        case userpageConstants.USERINFO_FAILURE:
            //todo: remove this mock
            return {
                "pk": 1,
                "username": "exceedcat",
                "email": "exceed@cat.com",
                "avatar": "https://78.media.tumblr.com/1f353e42115d7e62e80b35e9693816cc/tumblr_ot5b6yPohy1rugt9lo1_250.gif",
            };
        case userConstants.SIGNOUT:
            return {};
        default:
            return state
    }
}