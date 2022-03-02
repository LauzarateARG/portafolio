import React from "react";
import "./index.css";
import profileImg from "../../assets/profileImg.png";

export default function AboutMe() {
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
          <img src={profileImg} className="img" alt="profileImg" />
        </div>
      </div>
    </div>
  );
}
