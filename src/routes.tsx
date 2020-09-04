import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MaxNavBar from "./components/MaxNavBar";

import Home from "./pages/Home";
import Moda from "./pages/Moda";
import Bazar from "./pages/Bazar";
import Artesanato from "./pages/Artesanato";

function Routes() {
  return (
    <BrowserRouter>
      <MaxNavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/moda" component={Moda} />
        <Route path="/bazar" component={Bazar} />
        <Route path="/artesanato" component={Artesanato} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
