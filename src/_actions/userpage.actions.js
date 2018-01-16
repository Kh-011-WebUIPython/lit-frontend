import { userpageConstants } from '../_constants';
import { userService } from '../_services';
import { repoActions } from '.';

export const userpageActions = {
  getUserInfo,
  getUserInfoWithRepos,
};

function getUserInfo() {
  return (dispatch) => {
    dispatch(request());

    userService.getByToken()
      .then(
        (user) => {
          userService.getById(user.pk)
            .then(
              (userinfo) => {
                dispatch(success(userinfo));
              },
              (error) => {
                dispatch(failure(error));
              },
            );
        },
        (error) => {
          dispatch(failure(error));
        },
      );
  };


  function request() {
    return { type: userpageConstants.USERINFO_REQUEST };
  }

  function success(userinfo) {
    return { type: userpageConstants.USERINFO_SUCCESS, userinfo };
  }

  function failure(error) {
    return { type: userpageConstants.USERINFO_FAILURE, error };
  }
}

function getUserInfoWithRepos() {
  return async (dispatch) => {
    try {
      dispatch(request());

      const userinfo = await userService.getByToken();
      dispatch(repoActions.getByUser(userinfo.pk));
      const user = await userService.getById(userinfo.pk);

      dispatch(success(user));
    } catch (e) {
      dispatch(failure(e));
    }
  };


  function request() {
    return { type: userpageConstants.USERINFO_REQUEST };
  }

  function success(userinfo) {
    return { type: userpageConstants.USERINFO_SUCCESS, userinfo };
  }

  function failure(error) {
    return { type: userpageConstants.USERINFO_FAILURE, error };
  }
}
