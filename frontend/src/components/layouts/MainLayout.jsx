import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../Footer";
// import Copyright from "../Copyright";



const MainLayout = () => {
  return (
    <>
      <Outlet />
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Copyright /> */}
      
    </>
  );
};

export default MainLayout;
