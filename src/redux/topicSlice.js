import { createSlice } from '@reduxjs/toolkit';

export const topicSlice = createSlice({
  name:'topic',
  initialState: {
    topic: {
      title:'',
      text:'',
    }
  },
  reducers : {
    addTopic: (state, action) => {
      state.topic = action.payload
    },
    showTopic: (state, action) => {
      state.topic += action.payload
    },
  }
});
export const { addTopic, showTopic} = topicSlice.actions;

export const selectTopic = (state) => state.topic.topic;

export default topicSlice.reducer;