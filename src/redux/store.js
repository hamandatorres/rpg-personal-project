import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    character: characterReducer,
    user: userReducer,
  },
})