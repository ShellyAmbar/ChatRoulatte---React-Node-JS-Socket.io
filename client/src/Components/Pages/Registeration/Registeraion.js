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
    height: "120vh",

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
  videoSmall: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "fixed",
  },
  section1: {
    position: "fixed",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    minHeight: "100%",
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "#242424",
    objectFit: "contain",
  },
  section2: {
    position: "absolute",
    marginTop: "100px",
    marginBottom: "50px",
    right: 0,
    top: 0,
    left: 0,

    width: "100%",
    height: "400px",
    display: "flex",

    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.4)",
    objectFit: "contain",
  },
  section3: {
    position: "absolute",
    marginTop: "600px",
    marginBottom: "50px",
    right: 0,
    top: 0,
    left: 0,

    width: "100%",
    height: "50vh",
    display: "flex",

    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.4)",
    objectFit: "contain",
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
      <div className={classes.section1}>
        <video
          playsInline
          muted
          autoPlay
          ref={myVideo}
          className={classes.videoSmall}
        />
      </div>
      <div className={classes.section2}>
        <h2 style={{ marginBottom: "20px", color: "white", fontSize: "50px" }}>
          Welcome to DateRoulette
        </h2>
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
      <div className={classes.section3}></div>
    </div>
  );
}

export default Registeraion;
