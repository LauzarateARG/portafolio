import React from 'react';
import "./index.css"
import Home from '../Home/index';
import AboutMe from "../AboutMe/index"
import SlideShow from '../SlideShow/index';

function contain() {
  return (
      <div className='contain'>
          <SlideShow/>
          <Home />
          <AboutMe/>
      </div>
  );
}

export default contain;
