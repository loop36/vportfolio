import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Title from "../TitlePage/title";
import WhatIDo from "../WhatIDo/WhatIDo";
import "./main.scss";

import Data from "../../assets/data.jpg";
import FeaturedWork from "../FeaturedWorks/FeaturedWork";

const Main = () => {
  return (
    <>
      <div className="mainContainer" id="home">
        <NavigationMenu />
        <Title />
      </div>

      <div className="skills_container" id="skill">
        <h1>Featured Works</h1>
        <FeaturedWork />
      </div>
      <div className="skills_container" id="skill">
        <h1>Skills</h1>
        <Skills />
      </div>

      <ConnectWithMe />
      <Footer />
    </>
  );
};

export default Main;
