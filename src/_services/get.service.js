import { handleResponse } from '../_helpers';
import { LIT_URL } from '../_constants';

export const getService = {
  repo,
  user,
};

async function repo({ name, userId }) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  let repos = await fetch(`${LIT_URL}/repositories/`, { ...requestOptions }).then(handleResponse);
  // check that we have a repo with such a name
  repos = repos.results.filter(r => r.name === name);
  // check that it is exactly our user's repo
  repos = repos.filter(r => r.users.filter(u => u.id === userId).length > 0);
  return repos[0] ? repos[0] : Promise.reject('Repo not found');
}

async function user(name) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  let users = await fetch(`${LIT_URL}/users/`, { ...requestOptions }).then(handleResponse);
  users = users.results.filter(u => u.username === name);
  return users[0] ? users[0] : Promise.reject('User not found');
}
