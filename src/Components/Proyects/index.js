import React from 'react'
import "./index.css";
import Card from "../Card/index"

export default function proyects() {
  return (
    <div className='proyects'>
        <div className='cardContain'>
        <Card/>
        </div>
        <div className='cardShow'>
        </div>
    </div>
  )
}