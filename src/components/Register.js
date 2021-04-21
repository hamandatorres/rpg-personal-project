import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';



const Register = () =>  {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
 const handleSubmit = (e) => {
   e.preventDefault();
   
  dispatch(
    login({
      username: username,
      password: password,
    })
  );
  setUsername("");
  setPassword("")
 }
  return (
    <div className="front-page">
    <div className="welcome-message">
      <div>
    Welcome! You have entered the world of RPG. Have Fun!
    </div></div>
    <form className="input-boxes"
    onSubmit={(e) => handleSubmit(e)}>
    <input
    onChange={(e) => setUsername(e.target.value)}
    className="login-input"
    type="text"
    placeholder="Username"
    />
    <input
    onChange={(e) => setPassword(e.target.value)}
    className="login-input"
    type="password"
    placeholder="Password"
    />
    <button 
    className="enter-button">Register</button>
    </form>
    </div>
  )
};

export default Register;