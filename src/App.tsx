import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Content from "./components/Content/Content.jsx";
import { Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Grid container alignItems="stretch" className="App">
        <Grid item xs={12} sm={3}>
          <div className="side-bar">
            <Nav />
            <div className="description">
              <h1 className="welcome-message">Hello </h1>
              <p className="description-message">
                I am Kai Wu. A developer that tries to convert chocolate to code
                and an aspiring photographer. Check out my projects and
                creations :)
              </p>
              <div className="social-media">
                <Grid container justify="space-between" alignItems="center">
                  <a href="https://www.facebook.com/kaiwu.toh">
                    <FacebookIcon className="social-media-icons" />
                  </a>
                  <a href="https://www.instagram.com/kaiwuuu">
                    <InstagramIcon className="social-media-icons" />
                  </a>
                  <a href="https://github.com/kwtoh">
                    <GitHubIcon className="social-media-icons" />
                  </a>
                  <a href="https://www.linkedin.com/in/kai-wu-toh/">
                    <LinkedInIcon className="social-media-icons" />
                  </a>
                </Grid>
              </div>
            </div>
            <footer>Copyright © 2020 Kai Wu. All rights reserved.</footer>
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Content />
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
