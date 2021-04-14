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
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" className="links">Login</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" className="links">Register</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/topics" className="links">Topics</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/" className="links">Logout</Link>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/user" className="links">Profile</Link>
        </ul>
      </div>
    </nav>
  </body>
  )
}
export default Header