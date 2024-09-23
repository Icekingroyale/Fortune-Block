import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Certified from "./components/Certified";
import Card from "./components/Card";
import Iframe from "./components/Iframe";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import About from "./components/navlinks/About";
import Contact from "./components/navlinks/Contact";
import SignIn from "./components/navlinks/SignIn";
import Register from "./components/navlinks/Register";
// import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="home">
          <Routes>
            <Route path="/" element={<Header />}>
              {/* <Route index element={<Home />} /> */}
              <Route path="/about-us" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
          <Header />
          <HeroSection />
          <Certified />
          <Card />
          <Iframe />
          {/* <Transactions /> */}
          <Testimonies />
          <Footer />
          <Copyright />

          {/* Navlinks  */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
