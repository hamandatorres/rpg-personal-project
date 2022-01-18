import React from "react";
import { useSelector } from "react-redux";
import CharacterDisplay from "./CharacterDisplay";
import Character from "./Character";
// import AwsImage from './AwsImage';

const User = () => {
  const User = useSelector((state) => state.user.user.email);
  return (
    <div className="profile-page">
      <div className="profile-title">
        Welcome!
        {User}
      </div>
      <div className="character-display-box">
        <CharacterDisplay />
      </div>
      <div className="character-box">
        <Character />
        <div>{/* <AwsImage /> */}</div>
      </div>
    </div>
  );
};

export default User;
