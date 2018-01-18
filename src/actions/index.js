import * as ACTION_TYPES from '../constants/actionsTypes';

export default function action(type, fields = {}) {
  return { type, fields };
}

export const getUsers = (filter = {}, sort = {}) => action(ACTION_TYPES.USERS_FETCH_REQUESTED, {
  filter,
  sort,
});

export const getUserById = (userId = 1) => action(ACTION_TYPES.USER_FETCH_REQUESTED, {
  userId,
});

export const getAlbumsByUserId = (userId = 1) => action(ACTION_TYPES.ALBUMS_BY_USER_ID_FETCH_REQUESTED, {
  userId,
});

export const getPhotosByAlbumId = (albumId = 1) => action(ACTION_TYPES.ALBUM_PHOTOS_FETCH_REQUESTED, {
  albumId,
});
