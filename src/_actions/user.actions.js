import {userConstants} from '../_constants';
import {userService} from '../_services';
import {alertActions} from '.';
import {userpageActions} from "./userpage.actions";

export const userActions = {
    signIn,
    signOut,
    register,
    update,
    delete: _delete
};

function signIn(username, password) {
    return dispatch => {
        dispatch(request({username}));

        userService.signIn(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    dispatch(userpageActions.getUserInfo());
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
    return async dispatch => {
        try {
            dispatch(request(userData));

            const userinfo = await userService.getByToken()

            userData.id = userinfo.pk;
            userData.username = userinfo.username;
            const updated = await userService.update(userData)

            dispatch(success(updated));
            dispatch(userpageActions.getUserInfo());
        } catch (error) {
            dispatch(failure(error));
            dispatch(alertActions.error(error));
        }

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

function _delete(userData) {
    return async (dispatch) => {
        try {
            dispatch(request(userData));

            const userinfo = await userService.getByToken();
            const deletion = await userService.delete(userinfo.pk);

            dispatch(success());
        } catch (error) {
            dispatch(failure(error));
            dispatch(alertActions.error(error));
        }
    };

    function request(user) {
        return {type: userConstants.DELETE_REQUEST, user}
    }

    function success() {
        return {type: userConstants.DELETE_SUCCESS}
    }

    function failure(error) {
        return {type: userConstants.DELETE_FAILURE, error}
    }
}