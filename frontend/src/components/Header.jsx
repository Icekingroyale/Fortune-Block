import React, { useState } from "react";
import "../stylesheets/Header.css";
import favicon from "../assets/favicon.png";
import { useNavigate, NavLink } from "react-router-dom";
import open from "../assets/icons/bars-solid.svg";
import close from "../assets/icons/x-solid.svg";

const Header = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/register");
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          {/* fix the link below to scroll up to the header section
        instead of refreshing the page */}
          <NavLink to="/">
            <img className="logo" src={favicon} alt="" />
            <h1 className="investor">FortuneBlock</h1>
          </NavLink>
        </div>
        <div className="menu">
          <div className="menu-links">
            {/* <Navlink to='About' >About Us</Navlink> */}
            <nav>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/sign-in"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Sign In
              </NavLink>
              {/* <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Register
              </NavLink> */}
            </nav>
          </div>
        </div>
        <div className="wallet-btn">
          <button className="primary" onClick={handleBtnClick}>
            REGISTER{" "}
          </button>
        </div>
        <a href="/sign-in" className="sign-in">Sign In</a>
        <div className="menu-container">
          {/* Open icon (visible when menu is closed) */}
          <img
            src={open}
            alt="Open menu"
            className={`menu-icon open ${isOpen ? "hidden" : ""}`}
            onClick={toggleMenu}
          />

          {/* Close icon (visible when menu is open) */}
          <img
            src={close}
            alt="Close menu"
            className={`menu-icon close ${isOpen ? "" : "hidden"}`}
            onClick={toggleMenu}
          />

          {/* Nav Links */}
          <nav className={`nav-links ${isOpen ? "show" : ""}`}>
            <a href="/">Home</a>
            <a href="/about-us">About</a>
            <a href="/contact-us">Contact</a>
            <a href="/sign-in">Sign In</a>
            <button className="primary" onClick={handleBtnClick}>
              REGISTER{" "}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
