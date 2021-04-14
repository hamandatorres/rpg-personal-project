import React, { useState } from 'react';
import { mdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';


const Header = props => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
  
    <body>
    <nav className='navbar'>
    <div className='title'>Welcome</div>
    <button href='#' className='toggle-button' onClick={handleToggle}>
      {navbarOpen ? (
        <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) : (
        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
      )}
      </button>
    
      <div className='navbar-links'>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
          <li>
            <a href='#' 
            to={'/'}
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact >
            Login</a>
          </li>
          <li>
            <a href='#'
             to={'/'}
             activeClassName="active-link"
             onClick={() => closeMenu()}
             exact >
              Register</a>
              </li>
          <li>
            <a href='#'
             to={'/topic'}
             activeClassName="active-link"
             onClick={() => closeMenu()}
             exact >
              Topics</a>
              </li>
        </ul>
      </div>
    </nav>
    </body>
  )
}

export default Header