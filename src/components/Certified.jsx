import React from 'react'
import '../stylesheets/certified.css'
import ratings from '../assets/sh22.png';
import certify from '../assets/comm006.png'


const Certified = () => {
  return (
    <div className='certified-container'>
      <img src={ratings} alt="" />
      <img src={certify} alt="" />
        
    </div>
  )
}

export default Certified
