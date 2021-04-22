import React, { useState } from 'react';
import { addCharacter } from '../redux/characterSlice';
import { useDispatch} from 'react-redux';


const Characters = () => {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
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
      <label htmlFor="name">
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
      <label htmlFor="race">
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
      <label htmlFor="job">
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
      <label htmlFor="age">
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