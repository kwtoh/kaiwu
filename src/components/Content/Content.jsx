import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Creations from "../Creations/Creations";
// import Projects from "../Projects/Projects";
// import About from "../About/About.jsx";
import Thoughts from "../Thoughts/Thoughts";
import images from "../imageslist";
import thoughts from "../thoughtslist";

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const Content = () => {
  shuffle(images);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/creations">
          <Creations images={images} />
        </Route>
        {/* <Route path="/projects">
          <Projects />
        </Route> */}
        <Route path="/thoughts">
          <Thoughts thoughts={thoughts} />
        </Route>
      </Switch>
    </>
  );
};

export default Content;
