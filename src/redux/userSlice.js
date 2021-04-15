import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null;
    },
    addUser: (state, action) => {
      state = action.payload
    },
    updateUser: (state, action) => {
      state.value = {user: [...state, action.payload]}
    },
  },
})

export const { login, logout, addUser, updateUser } = userSlice.actions

export const selectUser = (state) => state.user.user;

export default userSlice.reducer
