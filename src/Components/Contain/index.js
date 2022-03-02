import React from "react";
import "./index.css";
//import components
import Home from "../Home/index";
import AboutMe from "../AboutMe/index";
import SlideShow from "../SlideShow/index";
import Proyects from "../Proyects/index";
import ContactMe from "../ContactMe/index";
import Footer from "../Footer/index";

function contain() {
  return (
    <div className="contain">
      <section id="home">
        <SlideShow />
        <Home />
      </section>

      <section id="AboutMe">
        <AboutMe />
      </section>

      <section id="Proyects">
        <Proyects />
      </section>

      <section id="ContactMe">
        <ContactMe />
        <Footer />
      </section>
    </div>
  );
}

export default contain;
