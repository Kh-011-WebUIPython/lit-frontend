import {userConstants} from '../_constants';
import {userService} from '../_services';
import {history} from '../_helpers';
import {alertActions} from '.';

export const userActions = {
    signIn,
    signOut,
    register,
};

function signIn(username, password) {
    return dispatch => {
        dispatch(request({username}));

        userService.signIn(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    // todo: find out why the hell it is so
                    history.push(`/${username.username}`);
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.SIGNIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.SIGNIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.SIGNIN_FAILURE, error}
    }
}

function signOut() {
    userService.signOut();
    return {type: userConstants.SIGNOUT};
}

function register(userData) {
    return dispatch => {
        dispatch(request(userData));

        userService.register(userData)
            .then(
                user => {
                    dispatch(success());
                    //todo: why not working
                    //todo: try to dispatch signIn action
                    signIn({username: userData.username, password: userData.password});
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}