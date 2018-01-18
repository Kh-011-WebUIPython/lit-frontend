import { getService } from '../_services';
import { checkConstants } from '../_constants';

export const checkActions = {
  checkUserAndRepo,
  checkUserAndRepoClear,
};

function checkUserAndRepo(username, name) {
  return async (dispatch) => {
    dispatch(request());
    try {
      const user = await getService.user(username);
      const repo = await getService.repo({ userId: user.id, name });
      dispatch(success({ user, repo }));
    } catch (error) {
      dispatch(failure(error));
    }
  };

  function request() {
    return { type: checkConstants.USER_AND_REPO_REQUEST };
  }

  function success(data) {
    return { type: checkConstants.USER_AND_REPO_SUCCESS, data };
  }

  function failure(error) {
    return { type: checkConstants.USER_AND_REPO_FAILURE, error };
  }
}

function checkUserAndRepoClear() {
  return { type: checkConstants.USER_AND_REPO_CLEAR };
}
