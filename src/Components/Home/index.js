import React from "react";
import "./index.css";
function home() {

  function seeProyects(){
    alert("See projects")
  }

  function downloadCV(){
    alert("Download CV")
  }

  return (
    <div className="home">
      <div className="cvContain">
        <p className="name">Hi, I'm Lautaro Zarate</p>
        <p className="job">Web Developer</p>
        <p className="descrption">
          This is my personal portfolio, here you can see the projects I worked
          on and also my personal information
        </p>
        <div className="btnContain">
          <button className="btn1" onClick={seeProyects} > See projects </button>
          <button className="btn2" onClick={downloadCV} > Download CV </button>
        </div>
      </div>
    </div>
  );
}

export default home;
