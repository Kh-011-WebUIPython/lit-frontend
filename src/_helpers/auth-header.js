export function authHeader() {
    // return authorization header with token key
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.key) {
        return {authorization: 'Token ' + user.key};
    } else {
        return {};
    }
}