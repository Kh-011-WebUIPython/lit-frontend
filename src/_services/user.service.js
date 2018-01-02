import {authHeader} from '../_helpers';

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

const LIT_URL = 'http://litvcs.win:8080/api/v1';

async function login(userData) {
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

function logout() {
    localStorage.removeItem('user');
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
        method: 'GET',
        headers: authHeader()
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
    const registerData = await fetch(LIT_URL + '/users/', {...requestOptions}).then(handleResponse);
    const loginData = login({username: user.username, password: user.password});

    return {registerData: registerData, loginData: loginData};
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(LIT_URL + '/users/' + user.id, {...requestOptions}).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(LIT_URL + '/users/' + id, {...requestOptions}).then(handleResponse);
}


function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}