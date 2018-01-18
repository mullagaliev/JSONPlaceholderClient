import { camelizeKeys } from 'humps';
const request = require('superagent');

const API_ROOT = `http://jsonplaceholder.typicode.com`;

function callApi(endpoint, method, data = {}) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  let apiRequest = request;
  switch (method) {
    case 'POST' :
      apiRequest = apiRequest
          .post(fullUrl)
          .send(data);
      break;
    case 'PUT' :
      apiRequest = apiRequest
          .put(fullUrl)
          .send(data);
      break;
    case 'DELETE' :
      apiRequest = apiRequest
          .delete(fullUrl)
          .send(data);
      break;
    case 'GET' :
      apiRequest = apiRequest
          .get(fullUrl)
          .query(data);
      break;
    default :
      apiRequest = apiRequest
          .get(fullUrl)
          .query(data);
  }

  return apiRequest
      .set('Content-Type', 'application/json')
      .set('accept', 'json')
      .then(
          response => {
            if (!response.ok)
              throw { message: 'Status error' };
            else {
              return camelizeKeys(response.body);
            }
          },
          error => {
            throw { code: 0, message: 'Connection error' }
          }
      );
}

/* USERS */
export const getUsers = (filter = {}, sort = {}) => callApi('/users', 'GET', filter);
export const getUserById = (userId = 1) => callApi('/users/' + userId, 'GET');

/* ALBUMS */
export const getAlbumsByUserId = (userId = 1) => callApi('/albums', 'GET', { userId });

/* PHOTOS */
export const getPhotosByAlbumId = (albumId = 1) => callApi('/photos', 'GET', { albumId });
