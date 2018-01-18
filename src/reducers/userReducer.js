import * as ACTION_TYPES from  '../constants/actionsTypes';
import REQUEST_STATUSES from '../constants/requestStatuses';

const defaultState = {
  info: {},
  lastError: null,
  requestStatus: REQUEST_STATUSES.NONE
};

function StatusSwitcher(state, requestStatus, lastError = null) {
  return Object.assign({}, state, {
    lastError,
    requestStatus
  });
}

function usersReducer(state = defaultState, action) {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.USER_FETCH_REQUESTED:
      return StatusSwitcher(state,  REQUEST_STATUSES.REQUESTED);
    case ACTION_TYPES.USER_FETCH_SUCCEEDED:
      const newState = Object.assign({}, state, {
        info: action.user,
      });
      return StatusSwitcher(newState, REQUEST_STATUSES.SUCCEEDED);
    case ACTION_TYPES.USER_FETCH_FAILED:
      return StatusSwitcher(state, REQUEST_STATUSES.FAILED, action.message);
    default:
      return state;
  }
}

export default usersReducer;
