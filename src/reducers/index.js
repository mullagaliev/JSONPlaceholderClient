import usersReducer from './usersReducer';
import userReducer from './userReducer';
import albumsReducer from './albumsReducer';
import albumReducer from './albumReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  user: userReducer,
  albums: albumsReducer,
  album: albumReducer,
  users: usersReducer,
});

export default rootReducer;
