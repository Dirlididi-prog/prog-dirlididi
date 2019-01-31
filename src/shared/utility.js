/* global localStorage */

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': localStorage.getItem('authorization')
};

function handleResponse (response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export const fetchGet = (endpoint) => {
  return window.fetch(endpoint, {
    method: 'GET',
    headers: headers
  }).then(handleResponse);
};

export const fetchPost = (endpoint, body) => {
  return window.fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  }).then(handleResponse);
};

export const fetchDelete = (endpoint) => (
  window.fetch(endpoint, {
    method: 'DELETE',
    headers: headers
  }).then(handleResponse)
);

export const fetchPut = (endpoint, body) => {
  return window.fetch(endpoint, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(body)
  }).then(handleResponse);
};
