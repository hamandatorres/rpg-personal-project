import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [click, setClick] = useState(true)
  const handleClick = () => setClick(!click)
  return (
    <body>
    <nav className="navbar">
      <div className="brand-title">RPG</div>
      <a onClick={handleClick} className="toggle-button" >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={
      click ?
      "navbar-links-closed" :
      "navbar-links navbar-links-open" }>
        <ul>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" 
          className="links login" 
          
          >Login
          {/* <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/user" className="links">Profile</Link> */}
          </Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/user" 
          className="links profile"
          onClick={handleClick}
          >Profile</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/register" className="links register">Register</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/topic" className="links topics">Topics</Link>
          <Link 
          style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" 
          className="links logout"
          >Logout</Link>
          
        </ul>
      </div>
    </nav>
  </body>
  )
}
export default Header