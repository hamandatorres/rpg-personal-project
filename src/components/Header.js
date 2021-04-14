import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = props => {
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  const Toggle = () => {
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    })
  }
  return (
    <body>
    <nav className="navbar">
      <div className="brand-title">RPG</div>
      <div onClick={Toggle()} className="toggle-button" >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div class="navbar-links">
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