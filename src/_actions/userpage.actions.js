import {userpageConstants} from '../_constants';
import {repoService, userService} from '../_services';

export const userpageActions = {
    getUserInfo,
    getUserInfoWithRepos,
};

function getUserInfo() {
    return dispatch => {
        dispatch(request());

        userService.getByToken()
            .then(
                userinfo => {
                    userService.getById(userinfo.pk)
                        .then(
                            userinfo => {
                                dispatch(success(userinfo))
                            },
                            error => {
                                dispatch(failure(error));
                            }
                        )
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

function getUserInfoWithRepos() {
    return dispatch => {
        dispatch(request());

        userService.getByToken()
            .then(
                userinfo => {
                    userService.getById(userinfo.pk)
                        .then(
                            user => {
                                repoService.getByUser(userinfo.pk)
                                    .then(
                                        repos => {
                                            dispatch(success({...user, repos: handleRepos(repos)}))
                                        }
                                    )
                            },
                            error => {
                                dispatch(failure(error));
                            }
                        )
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

    function handleRepos(repos) {
        let reposByStatus = {
            'owner': [],
            'contributor': [],
        }

        repos.results.forEach(repo => reposByStatus[repo.status].push(repo.repository_id));
        reposByStatus.owner = getReposById(reposByStatus.owner);
        return reposByStatus;
    }

    function getReposById(ids) {
        let repos = [];
        ids.map(id => repoService.getById(id).then(r => repos.push({name: r.name, description: r.description})));
        return(repos);
    }
}