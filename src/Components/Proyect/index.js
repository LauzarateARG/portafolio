import React from 'react'
import "./index.css";

export default function Proyect({data}) {
  return (
    <div className='imageShow'>
      <img className="proyectIage" src={data} alt="img"/>
    </div>
  )
}

