import usersReducer from './usersReducer';
import userReducer from './userReducer';
import albumsReducer from './albumsReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  albums: albumsReducer,
  users: usersReducer,
});

export default rootReducer;
