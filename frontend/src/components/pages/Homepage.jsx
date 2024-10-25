import React from 'react'
import '../../stylesheets/Homepage.css'
import Header from "../Header";
import HeroSection from "../HeroSection";
import Certified from "../Certified";
import Card from "../Card";
import Iframe from "../Iframe";
import Guarantee from '../Guarantee';
import Testimonies from "../Testimonies";
import Footer from "../Footer";
import Copyright from "../Copyright";

// import Transactions from "./components/Transactions";







const Homepage = () => {
  return (
    <>
    <div className='homepage'>
      <Header />
      <HeroSection /> 
      <Certified />
      <Card />
      <Iframe />
      <Guarantee />
      <Testimonies />
      <Footer />
      <Copyright />
    </div>
    </>
  )
} 

export default Homepage
