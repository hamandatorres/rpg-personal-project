import React from 'react';



const SubmitPost = () => {
const handleTopicPost = (e) => {
    e.preventDefault();
  }
  return (
    <div className="submit-box">
      <form onSubmit={handleTopicPost}>
      <textarea
      className="post-text-box"
      name="messageTxt"
      placeholder="Respond unto others!">
      </textarea>
      <button 
      className="post-button">Post</button>
      </form>
    </div>
  )
}


export default SubmitPost