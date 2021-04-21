import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  const [click, setClick] = useState(true)
  const handleClick = () => setClick(!click)
  return (
    <div>
    <nav className="navbar">
      <div className="brand-title">RPG</div>
      <div onClick={handleClick} className="toggle-button" >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={
      click ?
      "navbar-links-closed" :
      "navbar-links navbar-links-open" }>
        <ul>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}}  
          className="links login" to="/" >Login</Link>
           <Link style={{ color: 'inherit', textDecoration: 'inherit'}} 
          className="links logout" to="/">Logout</Link>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/register" className="links register">Register</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/user" 
          className="links profile">Profile</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/topic" className="links topics">Topics</Link>
          
        </ul>
      </div>
    </nav>
  </div>
  )
}
export default Header