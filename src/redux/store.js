import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';

export default configureStore({
  reducer: {
    character: characterReducer,
    user: userReducer,
    token: tokenReducer,
  },
})