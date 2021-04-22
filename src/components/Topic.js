import React from 'react';
import SubmitPost from './SubmitPost';
import SubmitTopic from './SubmitTopic';
import TopicDisplay from './TopicDisplay';

const Topic = () => {
 
  return (
    <div className="topic-page">
    <SubmitTopic />
    <SubmitPost />
    <TopicDisplay />
    </div> 
  )
}

export default Topic