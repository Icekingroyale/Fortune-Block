import React from "react";
import { useNavigate } from "react-router-dom";
import "../../stylesheets/pagestyles/About.css";
import cert from "../../assets/cert.jpg";
// import bg from '../../assets/bg/about-bg.png'
import Header from "../Header";
import Footer from "../Footer";
import Copyright from "../Copyright";
import ScrollAnimation from "../animations/ScrollAnimation";

const About = () => {
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/register");
  };

  return (
    <>
      <Header />
      <ScrollAnimation>
    <div className="about-container">

      <div className="abt-hero">
        <h1>About Fortune Block</h1>
      </div>
      <div className="abt-container">
        <h2>About Us</h2>
        <p>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis necessitatibus eaque voluptates mollitia consequatur, dolores cum dolor facere earum iure aliquam, reprehenderit alias, pariatur nobis aut rerum minus? Nobis, sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptate reprehenderit deleniti, officia illum quis corrupti voluptatem rerum ab cumque quam qui aspernatur quas ipsam voluptatibus eveniet repellendus ullam odio.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum debitis, cum obcaecati ipsa provident hic aliquid asperiores. Laudantium nulla tenetur odit. Ut nemo accusantium consequuntur autem distinctio placeat aut molestiae?
          Perspiciatis architecto ducimus atque quibusdam sequi accusamus aspernatur, voluptas repellendus illum eius autem facilis nihil, iste porro sed, impedit voluptatem. Voluptatem tempora nihil sit eaque veritatis sapiente ex, doloribus qui.
          Natus magni corrupti voluptate voluptatem odit. Nemo sapiente, possimus numquam, dignissim
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ullam, neque eveniet doloribus maiores quos nesciunt aliquam debitis tenetur doloremque ea recusandae? Perspiciatis molestiae esse dolorum et omnis commodi dolor. Obcaecati sequi dolor enim facere doloremque velit recusandae! Possimus exercitationem sequi et molestiae expedita. Sint exercitationem quas adipisci aliquam est qui velit laudantium maiores temporibus voluptates, iste ipsam, voluptatum ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptate eum nisi delectus nemo corrupti mollitia dignissimos recusandae voluptatibus, sapiente suscipit error repellat? Aliquam ad rerum vel pariatur, voluptatem quod!
        </p>
      </div>
      <img src={cert} alt="" className="cert" />
      <div className="register-btn">
        <button onClick={handleBtnClick}> CREATE ACCOUNT </button>
      </div>

      <Footer />
      <Copyright />
    </div>
      </ScrollAnimation>
    </>
  );
};

export default About;
