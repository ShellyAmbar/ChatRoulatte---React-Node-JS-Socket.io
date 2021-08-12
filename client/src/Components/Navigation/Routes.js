import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "../Pages/Settings/Settings";
import ChatRoulate from "../Pages/ChatRoulate";
import PrivateCall from "../Pages/PrivateCall";
import Registeration from "../Pages/Registeration/Registeraion";
import { AuthProvider } from "../../AuthContext";
import NavBar from "../NavBar";

export default function Routes() {
  return (
    <Router forceRefresh={true}>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Registeration />
        </Route>
        <Route path="/Registeration">
          <Registeration />
        </Route>
        <AuthProvider>
          <Route path="/ChatRoulate" >
            <ChatRoulate />
          </Route>
          <Route path="/PrivateCall">
            <PrivateCall />
          </Route>

          <Route path="/Settings">
            <Settings />
          </Route>
        </AuthProvider>
      </Switch>
    </Router>
  );
}
