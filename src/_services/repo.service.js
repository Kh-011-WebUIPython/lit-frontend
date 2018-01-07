import {authHeader} from '../_helpers';
import {LIT_URL} from "../_constants";

export const repoService = {
    create,
};

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