import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from '.';

export const userActions = {
    signIn,
    signOut,
    register,
    update,
};

function signIn(username, password) {
    return dispatch => {
        dispatch(request({username}));

        userService.signIn(username, password)
            .then(
                user => {
                    dispatch(success(user));
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
                () => {
                    dispatch(success());
                    dispatch(userActions.signIn({username: userData.username, password: userData.password}))
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

function update(userData) {
    return dispatch => {
        dispatch(request(userData));

        userService.getByToken()
            .then(
                user => {
                    userData.id = user.pk;
                    userData.username = user.username;
                    userService.update(userData)
                        .then(
                            user => {
                                dispatch(success(user));
                            },
                            error => {
                                dispatch(failure(error));
                                dispatch(alertActions.error(error));
                            }
                        )
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };

    function request(user) {
        return {type: userConstants.UPDATE_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.UPDATE_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.UPDATE_FAILURE, error}
    }
}