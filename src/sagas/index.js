import { put, call, takeLatest } from 'redux-saga/effects'
import * as JSONPlaceholder from '../services/JSONPlaceholder';
import * as ACTION_TYPES from '../constants/actionsTypes';

function * fetchUsers(action) {
  try {
    const { filter, sort } = action.fields;
    let response = yield call(JSONPlaceholder.getUsers, filter, sort);
    yield put({ type: ACTION_TYPES.USERS_FETCH_SUCCEEDED, users: response, filter, sort });
  } catch (e) {
    yield put({ type: ACTION_TYPES.USERS_FETCH_FAILED, message: e.message });
  }
}

function * fetchUser(action) {
  try {
    const { userId } = action.fields;
    let response = yield call(JSONPlaceholder.getUserById, userId);
    yield put({ type: ACTION_TYPES.USER_FETCH_SUCCEEDED, user: response, userId });
  } catch (e) {
    yield put({ type: ACTION_TYPES.USER_FETCH_FAILED, message: e.message });
  }
}

function * fetchAlbumsByUserId(action) {
  try {
    const { userId } = action.fields;
    let response = yield call(JSONPlaceholder.getAlbumsByUserId, userId);
    yield put({ type: ACTION_TYPES.ALBUMS_BY_USER_ID_FETCH_SUCCEEDED, albums: response, userId });
  } catch (e) {
    yield put({ type: ACTION_TYPES.ALBUMS_BY_USER_ID_FETCH_FAILED, message: e.message });
  }
}

function * fetchAlbumsPhotos(action) {
  try {
    const { albumId } = action.fields;
    let response = yield call(JSONPlaceholder.getPhotosByAlbumId, albumId);
    yield put({ type: ACTION_TYPES.ALBUM_PHOTOS_FETCH_SUCCEEDED, photos: response, albumId });
  } catch (e) {
    yield put({ type: ACTION_TYPES.ALBUM_PHOTOS_FETCH_FAILED, message: e.message });
  }
}

function * rootSaga() {
  yield takeLatest(ACTION_TYPES.USERS_FETCH_REQUESTED, fetchUsers);
  yield takeLatest(ACTION_TYPES.USER_FETCH_REQUESTED, fetchUser);
  yield takeLatest(ACTION_TYPES.USER_FETCH_REQUESTED, fetchAlbumsByUserId);
  yield takeLatest(ACTION_TYPES.ALBUM_PHOTOS_FETCH_REQUESTED, fetchAlbumsPhotos);
}

export default rootSaga;
