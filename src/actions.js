// import fetch from 'cross-fetch';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';

export const signIn = (username, password) => ({
    type: SIGN_IN,
    username: username,
    password: password,
});

export const signUp = (username, password, email) => ({
    type: SIGN_UP,
    username: username,
    password: password,
    email: email,
});

