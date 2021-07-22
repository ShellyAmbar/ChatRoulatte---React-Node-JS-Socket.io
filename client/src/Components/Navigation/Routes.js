import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "../Pages/Settings";
import ChatRoulate from "../Pages/ChatRoulate";
import PrivateCall from "../Pages/PrivateCall";
import Registeration from "../Pages/Registeraion";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/ChatRoulate">
            <ChatRoulate />
          </Route>
          <Route path="/PrivateCall">
            <PrivateCall />
          </Route>
          <Route path="/Registeration">
            <Registeration />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
