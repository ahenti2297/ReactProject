import React from 'react';
import Group from './Group';
import About from './About';
import './Middle.css';


export default function Middle() {
  return (
    <div className='middle'>
        <Group/>
        <About/>
    </div>
  )
}
