import React, { useContext, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { SocketContext } from "../../../SocketContext";
import { useHistory } from "react-router-dom";
//import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import {
  facebookProvider,
  googleProvider,
} from "../../../firebase-auth-providers";
import SocialMediaAuth from "../../../firebaseAuthMethodes";

import "./Registeration.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    minWidth: "100%",
    height: "100%",
    minHeight: "100%",
    background: "rgba(0, 0, 0, 0.4)",

    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
  },
  padding: {
    padding: "10px",
  },
  margin: {
    margin: "10px",
  },

  paper: {
    margin: "auto",
    width: "50%",

    alignSelf: "center",
    padding: "10px",
  },
  videoLarge: {
    position: "fixed",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    minHeight: "100%",
    minWidth: "100%",
  },
}));
function Registeraion() {
  const classes = useStyles();
  const { myVideo } = useContext(SocketContext);
  const [Name, setName] = useState("");
  const history = useHistory();
  const handleOnClickAuth = async (provider) => {
    await SocialMediaAuth(provider, () => {
      window.location.href = "/ChatRoulate";
    });
  };

  return (
    <div className={classes.container}>
      <video
        playsInline
        muted
        autoPlay
        ref={myVideo}
        className={classes.videoLarge}
      />
      <div className={classes.videoLarge}>
        <div id="login-card">
          <h2>Welcome to DateRoulette</h2>
          <div
            className="login-button google"
            onClick={() => handleOnClickAuth(googleProvider)}
          >
            {/* <GoogleOutlined style={{ marginRight: "10px" }} /> */}
            SignIn with Google
          </div>
          <br /> <br />
          <div
            className="login-button facebook"
            onClick={() => handleOnClickAuth(facebookProvider)}
          >
            {/* <FacebookOutlined style={{ marginRight: "10px" }} /> */}
            SignIn with Facebooke
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registeraion;
