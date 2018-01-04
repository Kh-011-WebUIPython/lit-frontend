export function userId() {
    let user = JSON.parse(localStorage.getItem('user'));

    return user ? user.id : null;
}