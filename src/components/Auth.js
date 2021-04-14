import React from 'react';


const Auth = props =>  {
  return (
    <div className="front-page">
    <div className="welcome-message"><a>
    Welcome! You have entered the world of RPG. Have Fun!
    </a></div>
    <div className="input-boxes">
    <input
    className="login-input"
    type="text"
    placeholder="Username"
    // value={username}
    />
    <input
    className="login-input"
    type="password"
    placeholder="Password"
    // value={password}
    />
    </div>
    </div>
    

  )
};

export default Auth