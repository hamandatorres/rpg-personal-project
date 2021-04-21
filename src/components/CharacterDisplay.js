import React from 'react';
import { useSelector } from 'react-redux';


const CharacterDisplay = () => {
  const character = useSelector((state) => state.character.character)
  const renderedCharacter = Object.values(character).map(character => { return <p key={character} character={character}>{character}</p>
  })

  return (
    <div className="character-display">
    <div className="character-display-title">Characters</div>
    <ul className="character-list">
      <li>{renderedCharacter}</li>
      </ul>
    </div>
  )
}

export default CharacterDisplay