import React from "react";
import "./index.css";
//import iconos
import facebookLogo from "../../assets/icons/facebook.png";
import gitHubLogo from "../../assets/icons/GitHub.png";
import linkedinLogo from "../../assets/icons/linkedin.png";

export default function ContactMe() {
  const Redirect = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
      <div className="iconContain">
        <button
          className="backgroundBtn"
          onClick={() => Redirect("https://github.com/LauzarateARG")}
        >
          <img className="icon" src={gitHubLogo} alt="gitHub Logo" />
        </button>

        <button
          className="backgroundBtn"
          onClick={() =>
            Redirect("https://www.facebook.com/lautaro.zarate.1088")
          }
        >
          <img className="icon" src={facebookLogo} alt="gitHub Logo" />
        </button>

        <button
          className="backgroundBtn"
          onClick={() =>
            Redirect(
              "https://www.linkedin.com/in/lautaro-ariel-zarate-castro-a87a98216/"
            )
          }
        >
          <img className="icon" src={linkedinLogo} alt="gitHub Logo" />
        </button>

      </div>
      <div className="footer"></div>
    </div>
  );
}
