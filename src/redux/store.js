import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './characterSlice';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';
import topicReducer from './topicSlice';

export default configureStore({
  reducer: {
    character: characterReducer,
    user: userReducer,
    token: tokenReducer,
    topic: topicReducer, 
  },
})

