import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/layouts/Navbar";
import Logo from "./Logo.svg";
import Home from "./Components/layouts/Home";
import Overview from "./Components/layouts/Overview";
import Tracker from "./Components/Tracker";
import IndiaTracker from "./Components/IndiaTracker";
import City from "./Components/City";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App #ede7f6 deep-purple lighten-5">
        <Navbar logo={Logo} title="Covid Tracker" />
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/world-tracker" component={Tracker} />
        <Route exact path="/indian-Tracker" component={IndiaTracker} />
        <Route exact path="/city-data" component={City} />
      </div>
    </BrowserRouter>
  );
};

export default App;
