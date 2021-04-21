import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice'
import API from './api';



const Auth = () =>  {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { 
      email: email, 
      password: password
    }
    
    await API.post('/auth/login', data)
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    dispatch(
      login({
        email: email,
        password: password
      })
    );

    setEmail("");
    setPassword("");
    

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
    >Login</button>
    </form>
    </div>
  )
};

export default Auth