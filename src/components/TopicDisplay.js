import React from 'react';
import { useSelector } from 'react-redux';


const TopicDisplay = () => {
  const Topics = useSelector((state) => state.topic.topic)
  const renderedTopics = Object.values(Topics).map(Topics => { return <p className="topic-rendered-box" key={Topics} character={Topics}>{Topics}</p>
  })
  return (
    <div className="topic-display-page">
      <ul>
        {renderedTopics}
      </ul>
    
    </div>
  )
}

export default TopicDisplay;