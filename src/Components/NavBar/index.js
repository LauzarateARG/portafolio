import React from 'react';
import "./index.css"

function navBar() {
  return(
      <div className='navBar'>
          <ul className='menu'>
            <li onClick={()=> alert("home")} className='menu-item'>Home</li>
            <li onClick={()=> alert("About Me")} className='menu-item'>About Me</li>
            <li onClick={()=> alert("Proyects")} className='menu-item'>Proyects</li>
            <li onClick={()=> alert("Contact Me")} className='menu-item'>Contact Me</li>
          </ul>
      </div>
  );
}

export default navBar;
