const initialState = {
  name:"",
  race:"",
  job:"",
  age:0,
  characters: []
}

const SET_CHARACTER_INFO = 'SET_CHARACTER_INFO'
const UPDATE_CHARACTER_LIST = 'UPDATE_CHARACTER_LIST'

export const setCharacterInfo = (name, race, job, age) => {
  return {
    type: SET_CHARACTER_INFO,
    payload: {name, race, job, age}
  }
}

export const updateCharacterList = (newCharacter) => {
  return {
    type: UPDATE_CHARACTER_LIST,
    payload: newCharacter
  }
}

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER_INFO:
      return {...state, ...action.payload }
      case UPDATE_CHARACTER_LIST:
        return {
        ...state, 
        name:"",
        race:"",
        job:"",
        age:0,
        characters: [
          ...state.characters, action.payload
        ]}
      default:
        return state
  }
}

export default characterReducer;