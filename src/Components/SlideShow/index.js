import React from "react";
import "./index.css";

//import Assets
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import { ReactComponent as RightArrow } from "../../assets/iconmonstr-angel-right-thin.svg";
import { ReactComponent as LeftArrow } from "../../assets/iconmonstr-angel-left-thin.svg";
function slideShow() {
  return (
    <div className="slideShow">
      <div className="slideContainer">
        <div className="slide">
          <img className="img" src={img2} alt="img" />
          <div className="textSlide">
            <p>Descripcion de experiencia</p>
          </div>
        </div>
        <div className="slide">
          <img className="img" src={img1} alt="img" />
          <div className="textSlide">
            <p>Descripcion de experiencia</p>
          </div>
        </div>
      </div>
      <div className="controls">
        <button className="controlLeft">
          <LeftArrow />
        </button>
        <button className="controlRight">
          <RightArrow />
        </button>
      </div>
    </div>
  );
}

export default slideShow;
