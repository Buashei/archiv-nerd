import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Particles from "react-particles-js";
import styles from "./App.module.scss";
import test from "./small-deer.2a0425af.svg";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Particles
        className={styles.background}
        params={{
          fps_limit: 28,
          particles: {
            collisions: {
              enable: false,
            },
            number: {
              value: 200,
              density: {
                enable: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 50,
              opacity: 0.4,
            },
            move: {
              speed: 1,
            },
            opacity: {
              anim: {
                enable: true,
                opacity_min: 0.05,
                speed: 1,
                sync: false,
              },
              value: 1,
            },
          },
          polygon: {
            enable: true,
            scale: 0.8,
            type: "inline",
            move: {
              radius: 30,
            },
            url: test,
            inline: {
              arrangement: "equidistant",
            },
            draw: {
              enable: true,
              stroke: {
                color: "rgba(255, 255, 255, .5)",
              },
            },
          },
          retina_detect: false,
        }}
      />
      {/* <div style={{ position: "absolute" }}>
        <Particles height="100%" width="100%" />
      </div> */}
      <div className={styles.header}>
        <div className={styles.header_title}>Archive</div>
        <div className={styles.header_nav}>
          <div className={styles.header_nav__username}>Admin</div>
          <FontAwesomeIcon opacity="0.5" icon={faUserCircle} />
        </div>
      </div>
      <Switch>
        <Route path="/" component={Main} />
        {/* <Route path="/users">
              <Users />
              </Route>
              <Route path="/">
              <Home />
            </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
