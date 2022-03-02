import React from "react";
import "./index.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="navigatio">
        <p className="footerTitle">I am from</p>
        <p className="footerText"> Córdoba, Córdoba Capítal </p>
        <p className="footerText"> Argentina </p>
        <p className="footerText"> CP: 5003 </p>
      </div>

      <div className="location">
        <p className="footerTitle"> Navigation </p>
        <p className="footerText"> Home </p>
        <p className="footerText"> About Me </p>
        <p className="footerText"> Proyects </p>
        <p className="footerText"> Contact Me</p>
      </div>

      <div className="sendMail">
        <p className="footerTitle"> Send me a mail for more information </p>
        <button className="mailBtn" onClick={() => window.location = 'mailto:lautarozarate212001@gmail.com'}> send me a mail </button>
      </div>
    </div>
  );
}
