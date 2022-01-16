import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";
import { ContextProvider } from "./Context/SocketContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./Components/Navigation/Routes";
import { AuthProvider } from "./Context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <ContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </ContextProvider>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
