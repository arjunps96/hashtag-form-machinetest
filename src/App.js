import React, { Fragment } from "react";

import { Route } from "react-router-dom";
import { Switch } from "react-router";

import "./App.css";

import MainNavigation from "./components/layout/MainNavigation";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TalentSignup from "./components/TalentSignup/TalentSignup";
import FanSignup from "./components/FanSignup/FanSignup";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Header />
      <Switch>
        <Route to="/fan-signup" exact component={FanSignup} />
        <Route to="/talent-signup" exact component={TalentSignup} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
