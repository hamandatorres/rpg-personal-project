import React from 'react';
import CharacterDisplay from './CharacterDisplay'
import Character from './Character'



const User = () => {

  return (
    <div className="profile-page">
      
    <div className="profile-title">
      Welcome! 
      <span className="user_name">{}</span>
    </div>
    <CharacterDisplay/>
    <Character />
    </div>
  )
}

export default User;