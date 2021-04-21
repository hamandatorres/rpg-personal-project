import React from 'react';

const SubmitTopic = () => {

  return (
      <div className="submit-box">
      <form>
        <input className="topic-title-box"
        name="title"
        placeholder="Title!" />
      <textarea
      className="topic-text-box"
      name="messageTxt"
      placeholder="Write your Story!"/>
      <button 
      className="topic-button">Topic</button>
      </form>
    </div>
  )
}

export default SubmitTopic