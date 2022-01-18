import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleRegister = (e) => {
    e.preventDefault();

    dispatch(
      addUser({
        email: email,
        password: password
      })
    );
    setEmail("");
    setPassword("");
  };
  return (
    <div className="front-page">
      <div className="welcome-message">
        <div>Welcome! You have entered the world of RPG. Have Fun!</div>
      </div>
      <form className="input-boxes" onSubmit={(e) => handleRegister(e)}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="login-input"
          type="email"
          placeholder="Username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="login-input"
          type="password"
          placeholder="Password"
        />
        <button className="enter-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
