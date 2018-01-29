import { authHeader, handleResponse } from '../_helpers';
import { LIT_URL } from '../_constants';

export const repoService = {
  create,
  getByUser,
  getById,
  update,
  delete: repoDelete,
};

async function create(name, description) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify({ name, description }),
  };

  return await fetch(`${LIT_URL}/repositories/`, { ...requestOptions })
    .then(handleResponse);
}

async function update(id, name, description) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify({ name, description }),
  };

  return await fetch(`${LIT_URL}/repositories/${id}`, { ...requestOptions })
    .then(handleResponse);
}

async function repoDelete(id) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };

  return await fetch(`${LIT_URL}/repositories/${id}`, { ...requestOptions });
}

async function getByUser(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return await fetch(`${LIT_URL}/users/${id}/repositories/`, { ...requestOptions })
    .then(handleResponse);
}

async function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  return await fetch(`${LIT_URL}/repositories/${id}`, { ...requestOptions }).then(handleResponse);
}
