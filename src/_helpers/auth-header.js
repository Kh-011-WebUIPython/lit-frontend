export function authHeader() {
  // return authorization header with token key
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.key) {
    return { authorization: `Token ${user.key}` };
  }
  return {};
}
