import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
  name:'token',
  initialState: {
    token: null
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setToken } = tokenSlice.actions;

export const selectToken = (state) => state.token.token;

export default tokenSlice.reducer;