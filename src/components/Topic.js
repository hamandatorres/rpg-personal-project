import React from 'react';
import SubmitPost from './SubmitPost';
import SubmitTopic from './SubmitTopic';

const Topic = () => {
  return (
    <div className="topic-page">
    <div className="topic-section">
    <div className="topic-title">
    <p className="topic-text">
    </p> 
    </div>
    </div>
    <SubmitTopic />
    <footer><SubmitPost /></footer>
 
    </div>
  )
}

export default Topic