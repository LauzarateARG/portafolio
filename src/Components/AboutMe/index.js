import React from "react";
import "./index.css";
import profileImg from "../../assets/profileImg.png"

function aboutMe() {
  function showMore(){
    alert("mostrar mas imformacion ")
  }
  return (
    <div className="aboutMe">
      <div className="infoContain">
        <p className="text">
          Hello, how are you, my name is Lautaro, I am 21 years old and I live
          in Córdoba, Argentina. I am a web developer graduated from henry's
          bootcamp, as my main strengths I would like to highlight my teamwork
          and my flexibility when it comes to solving problems.
        </p>
        <div className="imgContain">
          <img src={profileImg} className="img" alt="profileImg"/>
        </div>
      </div>
      <div>
        <button className="btn" onClick={showMore}>Show more information</button>
      </div>
    </div>
  );
}

export default aboutMe;
