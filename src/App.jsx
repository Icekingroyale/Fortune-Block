import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Certified from "./components/Certified";
import Card from "./components/Card";
import Iframe from "./components/Iframe";
import Testimonies from "./components/Testimonies";
import Footer from "./components/Footer";
import Copyright from './components/Copyright'
// import Transactions from "./components/Transactions";


function App() {
  return (
    <>
      <div className="home">
        <Header />
        <HeroSection />
        <Certified />
        <Card />
        <Iframe />
        {/* <Transactions /> */}
        <Testimonies />
        <Footer />
        <Copyright />
      </div>
    </>
  );
}

export default App;
