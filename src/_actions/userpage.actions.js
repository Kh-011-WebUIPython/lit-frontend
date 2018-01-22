import { userpageConstants } from '../_constants';
import { repoService, userService } from '../_services';
import { repoActions } from '.';

export const userpageActions = {
  getUser,
  getReposByUsername,
};

function getUser() {
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
    return { type: userpageConstants.USER_REQUEST };
  }

  function success(userinfo) {
    return { type: userpageConstants.USER_SUCCESS, user: userinfo };
  }

  function failure(error) {
    return { type: userpageConstants.USER_FAILURE, error };
  }
}

function getReposByUsername(username) {
  return async (dispatch) => {
    try {
      dispatch(request());

      const users = await userService.getAll();

      const user = users.results.filter(u => u.username === username);
      const repos = await repoService.getByUser(user[0].id);
      const normalizedRepos = await handleRepos(repos).then(x => x);

      const reallyNormalized = normalizedRepos.owner.map(r => ({
        name: r.name,
        description: r.description,
        id: r.id,
      }));

      dispatch(success({ owner: reallyNormalized, contributor: [] }));
    } catch (e) {
      dispatch(failure(e));
    }
  };


  function request() {
    return { type: userpageConstants.USERID_REQUEST };
  }

  function success(userinfo) {
    return { type: userpageConstants.USERID_SUCCESS, user: userinfo };
  }

  function failure(error) {
    return { type: userpageConstants.USERID_FAILURE, error };
  }

  async function handleRepos(repos) {
    const ownerIds = repos.results.filter(user => user.status === 'owner').map(repo => repo.repository_id);

    const oPromises = ownerIds.map(getRepoById);

    const owner = await Promise.all(oPromises);
    return ({ owner });
  }

  async function getRepoById(userId) {
    return await repoService.getById(userId);
  }
}
