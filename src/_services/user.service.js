import {authHeader} from '../_helpers';
import {LIT_URL} from "../_constants";

export const userService = {
    signIn,
    signOut,
    register,
    getAll,
    getById,
    getByToken,
    update,
    delete: _delete
};

async function signIn(userData) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    };

    return await fetch(LIT_URL + '/auth/login/', {...requestOptions})
        .then(handleResponse)
        .then(user => {
            if (user && user.key) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function signOut() {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    };
    localStorage.removeItem('user');
    fetch(LIT_URL + '/auth/logout/', {...requestOptions});
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(LIT_URL + '/users', requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(LIT_URL + '/users/' + id, {...requestOptions}).then(handleResponse);
}

async function register(user) {
    const requestOptions = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    return await fetch(LIT_URL + '/users/', {...requestOptions}).then(handleResponse);

}

async function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return await fetch(LIT_URL + '/users/' + user.id, {...requestOptions}).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(LIT_URL + '/users/' + id, {...requestOptions}).then(handleResponse);
}

async function getByToken() {
    const requestOptions = {
        method: 'get',
        headers: authHeader(),
    };

    return await fetch(LIT_URL + '/auth/user/', {...requestOptions}).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}