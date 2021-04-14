import React, { useState } from 'react';


const Header = props => {

  return (
    <body>
    <nav class="navbar">
      <div class="brand-title">RPG</div>
      <a href="#" class="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </a>
      <div class="navbar-links">
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Topics</a></li>
          <li><a href="#">Logout</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </div>
    </nav>
  </body>
  )
}
export default Header