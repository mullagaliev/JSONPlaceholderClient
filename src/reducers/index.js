import usersReducer from './usersReducer';
import userReducer from './userReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
});

export default rootReducer;
