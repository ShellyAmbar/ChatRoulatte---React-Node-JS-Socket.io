import React, { useContext, useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { SocketContext } from "../../../Context/SocketContext";
import { Link, useHistory } from "react-router-dom";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import {
  facebookProvider,
  googleProvider,
} from "../../../Firebase/firebase-auth-providers";
import SocialMediaAuth from "../../../Firebase/firebaseAuthMethodes";

import "./Registeration.css";
import { addUser } from "../../../Firebase/firebase-database";
import User from "../../../Firebase/Models/User";
import { Button } from "@material-ui/core";
import BubbleFloating from "../../Customs/BubbleFloating/BubbleFloating";


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

    background: "rgba(0, 0, 0, 0.4)",

    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
  },
  containerPage: {
    height: "100%",
    overflow: "hidden",
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
    color: "#fff",
    margin: 0,
    padding: 0,
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    width: "100%",
    height: "100vh",
    minHeight: "100%",
    minWidth: "100%",
    display: "flex",
   paddingTop:"200px",
    flexDirection: "column",
    alignItems: "center",
    background: "#242424",
    
  },
  loginBbuttonFCB:{
    cursor: "pointer",
    padding: 40,
    color: "white",
    padding: 20,
    backgroundColor: "#3b5998",
   
    display: "inline-block"
  },
  loginBbuttonGOOGLE:{
    cursor: "pointer",
    padding: 40,
    color: "white",
    padding: 20,
    backgroundColor: "#4285f4",
   
    display: "inline-block"
  },
  image:{
           
    height:"200px",
    width:"auto"

},

}));
function Registeraion() {
  const classes = useStyles();
  const { myVideo } = useContext(SocketContext);
  const [Name, setName] = useState("");
  const history = useHistory();
  const handleOnClickAuth = async (provider) => {
    console.log("click")
    await SocialMediaAuth(provider, (user) => {
      addUser(user);
      window.location.href = "/ChatRoulate";
    });
  };

 

  return (
      <div className="registeration-container">
        <video
          playsInline
          muted
          autoPlay
          ref={myVideo}
          className={classes.videoSmall}
        />
        <BubbleFloating/>
         
         <h2 style={{ marginBottom: "20px", color: "white", fontSize: "50px" }}>
          Register now..
        </h2>

        <Button
    
         className={classes.loginBbuttonGOOGLE}
         onClick={() => handleOnClickAuth(googleProvider)}
        >
           <GoogleOutlined style={{ marginRight: "10px" }} /> 
          SignIn with Google
        </Button>
        <br /> <br />
        <Button
 
         className={classes.loginBbuttonFCB}
         onClick={() => handleOnClickAuth(facebookProvider)}
        >
          <FacebookOutlined style={{ marginRight: "10px" }} /> 
          SignIn with Facebooke
        </Button>
      </div>
  );
}

export default Registeraion;
