import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name:'character',
  initialState: {
  name:"",
  race:"",
  job:"",
  age:0,
  characters: []
  },
  reducers: {
    addName: (state) => {
      state.value = {...state, name: ''}
    },
    addRace: (state) => {
      state.value = {...state, race: ''}
    },
    addJob: (state) => {
      state.value = {...state, job: ''}
    },
    addAge: (state) => {
      state.value = {...state, age:''}
    },
    addCharacter: (state, action) => {
      state.value = {characters: [...state.characters, action.payload]}
    },
  },
})
export const { addName, addAge, addJob, addRace, addCharacter} = characterSlice.actions

export default characterSlice.reducers