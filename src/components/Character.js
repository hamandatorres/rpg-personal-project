import React, { useState } from 'react';
import { addCharacter, showCharacter } from '../redux/characterSlice';
import { useDispatch, useSelector} from 'react-redux';
import { selectCharacter } from '../redux/characterSlice'


const Characters = () => {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch()
  const character = useSelector(selectCharacter)
  const handleSubmit = (e) => {
    e.preventDefault();
  dispatch(
    addCharacter({
      name: name,
      race: race,
      job: job,
      age: age,
    })
  );
  setName("");
  setRace("");
  setJob("");
  setAge("");
 }
  return (
    <div className="character-page">
    <h2 className="h2-characters">Character Creator</h2>
    <form 
    onSubmit={(e) => handleSubmit(e)}
    className="character-form">
      <div>
      <label for="name">
      Name
      </label>
      <input 
      onChange={(e) => setName(e.target.value)}
      className="name box"
      placeholder="Name"
      name="name"
      type="text" />
      </div>
      <div>
      <label for="race">
        Race
      </label>
      <input
      onChange={(e) => setRace(e.target.value)}
      className="race box"
      placeholder="Elf"
      name="race"
      type="text"/>
      </div>
      <div>
      <label for="job">
        Job
      </label>
      <input
      onChange={(e) => setJob(e.target.value)}
      className="job box"
      placeholder="Artisan"
      name="job"
      type="text"/>
      </div>
      <div>
      <label for="age">
        Age
      </label>
      <input
      onChange={(e) => setAge(e.target.value)}
      className="age box"
      placeholder="Age"
      name="age"
      type="number"/>
      </div>
      <button className="enter-button">Enter</button>
    </form>

    </div>
  )
}

export default Characters