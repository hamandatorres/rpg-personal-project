import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice'
import API from './api';



const Auth = () =>  {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin =  (e) => {
    e.preventDefault();
  
    dispatch(
      login({
        email: email,
        password: password
      })
      );
      
      setEmail("");
      setPassword("");


      API.post('/auth/login', {
        email: email, password: password })
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      }) 
      }
      
  return (
    <div className="front-page">
    <div className="welcome-message">
      <div>
    Welcome! You have entered the world of RPG. Have Fun!
    </div></div>
    <form className="input-boxes"
    onSubmit={(e) => handleLogin(e)}>
    <input
    onChange={(e) => setEmail(e.target.value)}
    label="email"
    value={email}
    className="login-input"
    type="text"
    placeholder="Email"
    />
    <input
    onChange={(e) => setPassword(e.target.value)}
    label="password"
    value={password}
    className="login-input"
    type="password"
    placeholder="Password"
    />
    <button 
    className="enter-button"
    type="submit"
    onClick={handleLogin}
    >Login</button>
    </form>
    </div>
  )
};

export default Auth