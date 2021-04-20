import React from 'react';
import CharacterDisplay from './CharacterDisplay'
import Character from './Character'


const User = () => {
  return (
    <div className="profile-page">
    <a className="profile-title">User</a>
    <CharacterDisplay/>
    <Character />
    </div>
  )
}

export default User;