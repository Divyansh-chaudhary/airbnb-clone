import "./css/app.css";
import React, { useEffect, useRef, useState } from "react";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Stays from "./components/Stays";

const App = () => {
  const app = useRef();
  const [navPos, setNavPos] = useState("absolute");

  const windowScolling = () =>
    window.scrollY > 200 ? setNavPos("fixed") : setNavPos("absolute");

  useEffect(() => {
    window.addEventListener("scroll", windowScolling);
    return () => {
      window.removeEventListener("scroll", windowScolling);
    };
  }, []);

  return (
    <div ref={app} className="app">
      <Switch>
        <Route exact path="/">
          <Nav navPos={navPos} />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/stays">
          <Nav navPos={navPos} />
          <Stays />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
