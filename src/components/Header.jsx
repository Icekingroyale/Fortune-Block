import React from 'react'
import '../stylesheets/Header.css'
import favicon from '../assets/favicon.png'




const Header = () => {
  return (
    <div className='header-container'>
      <div>
        <a>
          <img  className='logo' src={favicon} alt="" />
        </a >
      </div>
      <div className='menu'>
        <div className='menu-links'>
          {/* <Navlink to='About' >About Us</Navlink> */}
            <a href="">HOME</a>
            <a href="">ABOUT US</a>
            <a href="">CONTACT US</a>
            <a href="">SIGN IN</a>
            <a href="">REGISTER</a>
        </div>
      </div>
      <div className='wallet-btn'> 
        <button className='primary'>REGISTER </button></div>
      
    </div>
  )
}

export default Header
