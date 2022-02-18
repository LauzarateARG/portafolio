import React, { useEffect, useRef } from "react";
import "./index.css";

//import Assets
import img1 from "../../assets/Technologies/1.png";
import img2 from "../../assets/Technologies/2.png";

export default function SlideShow() {
  const slideContainer = useRef(null);
  const intervalSlideShow = useRef(null);

  function next() {
    if (slideContainer.current.children.length > 0) {    
      //Obtener el primer elemento del slide contain
      const firstElement = slideContainer.current.children[0];

      //Establecemos la transicion ára el slide contain
      slideContainer.current.style.transition = "1500ms ease-out all";

      const slideSize = slideContainer.current.children[0].offsetWidth;

      //Movemos el slide contain
      slideContainer.current.style.transform = `translateX(-${slideSize}px)`;

      const transicion = () => {
        //reiniciamos la posicion del slide contain
        slideContainer.current.style.transition = "none";
        slideContainer.current.style.transform = `translateX(0px)`;

        //tomamos el primer elemento y lo mandamos al final
        slideContainer.current.appendChild(firstElement);
      };

      //Eventlistener
      slideContainer.current.addEventListener("transitionend", transicion);
    }
  }

  useEffect(() => {
    intervalSlideShow.current = setInterval(() => {
      next();
    }, 10000);

    slideContainer.current.addEventListener("mouseenter", () => {
      clearInterval(intervalSlideShow.current);
    });

    slideContainer.current.addEventListener("mouseleave", () => {
      intervalSlideShow.current = setInterval(() => {
        next();
      }, 10000);
    });
  }, []);

  return (
    <div className="slideShow">
      <div className="slideContainer" ref={slideContainer}>
        <div className="slide">
          <img className="img" src={img2} alt="img1" />
          <div className="textSlide">
            <p>Descripcion de experiencia</p>
          </div>
        </div>

        <div className="slide">
          <img className="img" src={img1} alt="img2" />
          <div className="textSlide">
            <p>Descripcion de experiencia</p>
          </div>
        </div>
      </div>
    </div>
  );
}