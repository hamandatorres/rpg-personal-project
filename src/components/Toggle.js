
import React from 'react';

const Toggle = () => {
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', () => {
navbarLinks.classList.toggle('active')
})

  return (
    <>
    </>
  )
}

export default Toggle