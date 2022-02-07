import React from 'react';
import "./index.css"

function navBar() {
  return(
      <div className='navBar'>
          <ul className='menu'>
            <li className='menu-item'>Home</li>
            <li className='menu-item'>About Me</li>
            <li className='menu-item'>Proyects</li>
            <li className='menu-item'>Contact Me</li>
          </ul>
      </div>
  );
}

export default navBar;
