import {userpageConstants} from '../_constants';
import {userService} from '../_services';

export const userpageActions = {
    getUserInfo,
};

function getUserInfo() {
    return dispatch => {
        dispatch(request());

        userService.getByToken()
            .then(
                userinfo => {
                    dispatch(success(userinfo));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function request() {
        return {type: userpageConstants.USERINFO_REQUEST}
    }

    function success(userinfo) {
        return {type: userpageConstants.USERINFO_SUCCESS, userinfo}
    }

    function failure(error) {
        return {type: userpageConstants.USERINFO_FAILURE, error}
    }
}