import React from "react";
import mbs from "../../images/mbs_mood.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <img alt="background" className="home-background" src={mbs}></img>
    </>
  );
};

export default Home;
