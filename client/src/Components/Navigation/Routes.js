import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "../Pages/Settings/Settings";
import ChatRoulate from "../Pages/ChatRoulate";
import PrivateCall from "../Pages/PrivateCall";
import Registeration from "../Pages/Registeration/Registeraion";

import NavBar from "../NavBar";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";

export default function Routes() {
  return (
    <Router forceRefresh={true}>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Registeration">
          <Registeration />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>

        <PrivateRoute path="/ChatRoulate" component={ChatRoulate} />

        <PrivateRoute path="/PrivateCall" component={PrivateCall} />

        <PrivateRoute path="/Settings" component={Settings} />
      </Switch>
    </Router>
  );
}
