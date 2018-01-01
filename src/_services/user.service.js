import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getById,
    update,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('/auth/login', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            // login successful if there's a token key in the response
            if (user && user.key) {
                // store user details and token key in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // todo: мне не нравится логаут в сваггере, обсудить с Максом
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// todo: wtf?! get на users
// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };
//
//     return fetch('/users', requestOptions).then(handleResponse);
// }

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('/users/' + _id, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users', requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/' + user.id, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch('/users/' + id, requestOptions).then(handleResponse);;
}


function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}