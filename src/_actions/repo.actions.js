import {repoConstants} from '../_constants';
import {repoService} from '../_services';
import {alertActions} from '.';


export const repoActions = {
    create,
    getByStatus,
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

function getByStatus(userId, status) {
    return dispatch => {
        dispatch(request());

        repoService.getByUser(userId)
            .then(
                repos => {
                    console.log(repos);
                    dispatch(success(repos));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request() {
        return {type: repoConstants.GET_BY_STATUS_REQUEST}
    }

    function success(repos) {
        return {type: repoConstants.GET_BY_STATUS_SUCCESS, repos}
    }

    function failure(error) {
        return {type: repoConstants.CREATION_FAILURE, error}
    }
}
