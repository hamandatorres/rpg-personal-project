import React from 'react';
import CharacterDisplay from './CharacterDisplay'
import Character from './Character'



const User = () => {

  return (
    <div className="profile-page">
    <div className="profile-title">
      Welcome! 
      <span className="user_name">Player</span>
    </div>
    <div className="character-display-box">
    <CharacterDisplay/>
    </div>
    <div className="character-box">
    <Character />
    </div>
    </div>
  )
}

export default User;