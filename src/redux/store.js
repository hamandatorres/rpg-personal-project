import { createStore } from 'redux';
import characterReducer from './characterReducer';

let store = createStore(characterReducer)

export default store