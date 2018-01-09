import {repoConstants} from '../_constants';
import {repoService} from '../_services';
import {alertActions} from '.';


export const repoActions = {
    create,
    getByUser,
};


function create({name, description}) {
    return dispatch => {
        dispatch(request({name}));

        repoService.create(name, description)
            .then(
                repo => {
                    console.log(repo);
                    dispatch(success(repo));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(repo) {
        return {type: repoConstants.CREATION_REQUEST, repo}
    }

    function success(repo) {
        return {type: repoConstants.CREATION_SUCCESS, repo}
    }

    function failure(error) {
        return {type: repoConstants.CREATION_FAILURE, error}
    }
}

function getByUser(userId) {
    return dispatch => {
        dispatch(request());

        repoService.getByUser(userId)
            .then(
                repos => {
                    console.log(repos);
                    dispatch(success(handleRepos(repos)));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() {
        return {type: repoConstants.GET_BY_USER_REQUEST}
    }

    function success(repos) {
        return {type: repoConstants.GET_BY_USER_SUCCESS, repos}
    }

    function failure(error) {
        return {type: repoConstants.GET_BY_USER_FAILURE, error}
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
        return (repos);
    }
}
