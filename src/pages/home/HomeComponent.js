import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import style from "./HomeComponent.module.css";

function Home(props) {
  return (
    <div className={style.HomePage}>
        <Header theme={props.theme} setTheme={props.setTheme} />
      {/* <div className={style.HeaderArea}>
      </div> */}
      <div className={style.MainContent}>
        <Greeting theme={props.theme} />
        <Skills theme={props.theme} />
        <Footer theme={props.theme} />
      </div>
    </div>
  );
}

export default Home;
