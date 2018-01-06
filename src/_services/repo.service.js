import {authHeader} from '../_helpers';

export const repoService = {
    create,
};

const LIT_URL = 'http://litvcs.win:8080/api/v1';

async function create(name, description) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', ...authHeader()},
        body: JSON.stringify({name, description})
    };

    return await fetch(LIT_URL + '/repositories/', {...requestOptions})
        .then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}