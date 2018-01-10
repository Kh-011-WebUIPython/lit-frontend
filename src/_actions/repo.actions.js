import {repoConstants} from '../_constants';
import {repoService} from '../_services';
import {alertActions} from '.';


export const repoActions = {
    create,
    clearCreation,
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

function clearCreation() {
    return {type: repoConstants.CREATION_CLEAR}
}

function getByUser(id) {
    return async dispatch => {
        try {
            dispatch(request());

            const repos = await repoService.getByUser(id)
            const normalizedRepos = await handleRepos(repos).then(x => x);

            const reallyNormalized = normalizedRepos.owner.map(r => ({name: r.name, description: r.description}));
            dispatch(success({owner: reallyNormalized, contributor: []}));
        } catch (error) {
            dispatch(failure(error));
            dispatch(alertActions.error(error));
        }
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

    async function handleRepos(repos) {
        const ownerIds = repos.results.filter(user => user.status === 'owner').map(repo => repo.repository_id);
        const contributorIds = repos.results.filter(user => user.status !== 'owner').map(repo => repo.repository_id);

        const oPromises = ownerIds.map(getRepoById);

        // const cPromises = contributorIds.map(getRepoById);
        const owner = await Promise.all(oPromises);
        return ({owner: owner});
    }

    async function getRepoById(id) {
        return await repoService.getById(id);
    }


    function handleResponse(response) {
        if (!response.ok) {
            return Promise.reject(response.statusText);
        }

        return response.json();
    }
}
