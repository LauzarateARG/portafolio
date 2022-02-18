import React from "react";
import "./index.css";

export default function Card({title,detail}) {
  return (
    <div className="Card">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="description">
        <p>{detail}</p>
      </div>
    </div>
  );
}
