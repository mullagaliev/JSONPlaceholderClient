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

