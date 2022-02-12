import React from 'react';
import "./index.css"
import Home from '../Home/index';
import AboutMe from "../AboutMe/index"
import SlideShow from '../SlideShow/index';
import Proyects from '../Proyects/index';

function contain() {
  return (
      <div className='contain'>
          <SlideShow/>
          <Home />
          <AboutMe/>
          <Proyects/>
      </div>
  );
}

export default contain;
