import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Title from "../TitlePage/title";
import WhatIDo from "../WhatIDo/WhatIDo";
import "./main.scss";

import Data from "../../assets/data.jpg";

const Main = () => {
  return (
    <>
      <div className="mainContainer" id="home">
        <NavigationMenu />
        <Title />
      </div>
      <div className="experience_container" id="whatIDO">
        <h1>What I Do</h1>
        <WhatIDo />
        <div className="data">
          <img src={Data} />
        </div>
      </div>
      <div className="skills_container" id="skills">
        <h1>Skills</h1>
        <Skills />
      </div>

      <ConnectWithMe />
      <Footer />
    </>
  );
};

export default Main;
