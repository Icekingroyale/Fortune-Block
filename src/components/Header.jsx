import React, {useState} from "react";
import "../stylesheets/Header.css";
import favicon from "../assets/favicon.png";
import { NavLink } from "react-router-dom";
import open from '../assets/icons/bars-solid.svg'
import close from '../assets/icons/x-solid.svg'




// const clickopen = document.getElementById('open')
// const clickclose = document.getElementById('close')
// const menu = document.getElementsByClassName('menu-links')




const Header = () => {


  




  return (
    <div className="header-container">
      <div className="logo-container">
        <a href="./">
          <img className="logo" src={favicon} alt="" />
          <h1 className="investor">investor</h1>
        </a> 
      </div>
      <div className="menu">
        <div className="menu-links">
          {/* <Navlink to='About' >About Us</Navlink> */}
          <header>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/contact-us">Contact Us</NavLink>
              <NavLink to="/sign-in">Sign In</NavLink>
              <NavLink to="/register">Register</NavLink>
            </nav>
          </header>
        </div>
      </div>
      <div className="wallet-btn">
        <button className="primary">REGISTER </button>
      </div>
      <div className="hdmenu" >
        <img src={open} alt="" className="qmenu" id="open" />
        <img src={close} alt="" className="qmenu" id="close" />
      </div>
    </div>
  );
};

export default Header;
