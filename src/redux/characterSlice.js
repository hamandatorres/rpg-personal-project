import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({

  name:'character',
  initialState: {
  character: {
    name: '',
    race: '',
    job: '',
    age: 0 
  }
  },
  reducers: {
    addCharacter: (state, action) => {
      state.character = action.payload
    },
    showCharacter: (state, action) => {
      state.character += action.payload
    },
  },
})
export const { showCharacter, addCharacter } = characterSlice.actions;

export const selectCharacter = (state) => state.character.character;

export default characterSlice.reducer;