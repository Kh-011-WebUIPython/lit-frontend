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

    return fetch(`${LIT_URL}/users/${id}/`, {...requestOptions}).then(handleResponse);
}

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    return await fetch(LIT_URL + '/users/', {...requestOptions}).then(handleResponse);

}

async function update(user) {
    // const requestOptions = {
    //     method: 'PATCH',
    //     headers: {...authHeader(), enctype: 'multipart/form-data'},
    //     body: new FormData(user)
    // };
    //
    // return await fetch(`${LIT_URL}/users/${user.id}/`, {...requestOptions}).then(handleResponse);

    var data = new FormData();
    data.append("email", "qwerty@mail.ru");

    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("PATCH", "http://127.0.0.1:8000/api/v1/users/14/");
    xhr.setRequestHeader("authorization", "Token 510f1a6e78372643d2972042e56792c5eb925284");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "b9164155-40b7-340f-3440-4f5bbad193be");

    return await xhr.send(data);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${LIT_URL}/users/${id}/`, {...requestOptions})
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
        })
        .then(() => localStorage.removeItem('user'));
}

async function getByToken() {
    const requestOptions = {
        method: 'GET',
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