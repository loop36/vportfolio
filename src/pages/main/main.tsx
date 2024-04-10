import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Title from "../TitlePage/title";
//import WhatIDo from "../WhatIDo/WhatIDo";
import "./main.scss";

// import Data from "../../assets/data.jpg";
import FeaturedWork from "../FeaturedWorks/FeaturedWork";

const Main = () => {
  return (
    <div className="parent_container">
      <NavigationMenu />
      <div className="mainContainer">
        <div className="content-container">
          <Title />
        </div>
      </div>
      <div className="feature_container" id="feature">
        <div className="content-container">
          <h1>Featured Works</h1>
          <FeaturedWork />
        </div>
      </div>
      <div className="skills_container" id="skill">
        <div className="content-container">
          <h1>Skills</h1>
          <Skills />
        </div>
      </div>
      <div className="content-container">
        <ConnectWithMe />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
