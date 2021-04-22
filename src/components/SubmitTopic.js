import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTopic } from '../redux/topicSlice';


const SubmitTopic = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  dispatch(
    addTopic({
      title: title,
      text: text
    })
  );
  setTitle("");
  setText("");
  }
  
  return (
      <div className="submit-box">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
        className="topic-title-box"
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        placeholder="Title!" />
      <textarea
      onChange={(e) => setText(e.target.value)}
      className="topic-text-box"
      name="messageTxt"
      placeholder="Write your Story!"/>
      <button 
      className="topic-button">Topic</button>
      <br />
    
      </form>
    </div>
  )
}

export default SubmitTopic