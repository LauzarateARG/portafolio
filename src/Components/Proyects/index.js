import React, { useState } from "react";
import "./index.css";

//import components
import Card from "../Card/index";
import Proyect from "../Proyect/index";
//improt images
import WeatherAppImg from "../../assets/Proyects/WeatherApp.png";
import spotifyImg from "../../assets/Proyects/SpotifyCloned.png";

export default function Proyects() {
  const [proyectShow, setProyectShow] = useState(0);
  const ProyectsIfo = [
    {
      id: 0,
      title: "Spotify Cloned",
      detail: "Clon de spotify con todas las funciones basicas",
      img: spotifyImg,
    },
    {
      id: 1,
      title: "WeatherApp",
      detail: "App del clima donde ver la temperatura de tu ciudad",
      img: WeatherAppImg,
    },
  ];

  return (
    <div className="proyects">
      <div className="cardContain">
        {ProyectsIfo.map((el) => {
          return (
            <button className="CardBtn" onClick={() => setProyectShow(el.id)}>
              <Card className="card" title={el.title} detail={el.detail} />
            </button>
          );
        })}
      </div>
      <div className="cardShow">
        <Proyect data={ProyectsIfo[proyectShow].img} />
        <div className="CardShowControl" >
          <button className="btnControls" onClick={()=>alert("show more imfo proyect")}>Show more</button>
      </div> 
      </div>
    </div>
  );
}
