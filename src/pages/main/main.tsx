import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Title from "../TitlePage/title";
import WhatIDo from "../WhatIDo/WhatIDo";
import './main.scss'

const Main = () => {
  return (
    <div className="mainContainer">
      <NavigationMenu />
      <Title />
      <WhatIDo />
      <Skills />
      <ConnectWithMe />
      <Footer />
    </div>
  );
};

export default Main;
