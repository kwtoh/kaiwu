import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Creations from "../Creations/Creations";
// import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import images from "../imageslist";
import "tachyons";

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
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/creations">
          <Creations images={images} />
        </Route>
        {/* <Route path="/projects">
          <Projects />
        </Route> */}
      </Switch>
    </>
  );
};

export default Content;
