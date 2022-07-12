import React, {useContext, useEffect, useState, useRef} from "react";
import {Typography, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {SocketContext} from "../../Context/SocketContext";
import ResizeableAndDraggable from "../ResizeableAndDraggable";
import Draggable from "react-draggable";
import {render} from "react-dom";
import LoadingDots from "../LoadingDots/LoadingDots";
// import { auth } from "./../../firebase";
import BubbleFloating from "../Customs/BubbleFloating/BubbleFloating";

const useStyles = makeStyles((theme) => ({
  smallVideo: {
    zIndex: 1,
    //backgroundColor: "rgba(177, 90, 90, 0.425)",
    position: "absolute",
    display: "flex",
    flexDirection: "column",

    top: 70,

    left: "2%",

    [theme.breakpoints.down("xs")]: {
      width: "20%",
      height: " 10%",
    },

    width: "20%",
    height: " 30%",
  },
  videoContainer: {
    //  border: "3px solid #ffff",
    position: "absolute",
    top: "50px",
    left: 0,
    width: "100%",
    height: "100%",
  },
  videoLarge: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    position: "fixed",
    objectFit: "cover",
    right: 0,
    bottom: 0,
    minHeight: "100%",
    minWidth: "100%",
  },

  // overlay: {
  //   opacity: 0.5,
  //   backgroundColor: '#000000'
  // },
}));

const VideoPlayer = (props) => {
  const {
    name,
    myVideo,
    myVideo2,
    userVideo,
    callAccepted,
    callEnded,
    call,
    stream,
    isOnCall,
    myVideoSrc,
    userVideoSrc,
  } = useContext(SocketContext);
  // const [user, setUser] = useState(auth.currentUser)

  const classes = useStyles();

  function onCall() {
    return (
      <div>
        <video
          playsInline
          muted
          ref={userVideo}
          autoPlay
          className={classes.videoLarge}
        />
        <div className={classes.smallVideo}>
          <video
            playsInline
            muted
            autoPlay
            className={classes.videoContainer}
            ref={myVideo2}
          />
          <h1 style={{color: "ffff"}}>{name}</h1>
        </div>
      </div>
    );
  }

  function notOnCall() {
    return (
      <div>
        <video
          playsInline
          muted
          ref={myVideo}
          autoPlay
          className={classes.videoLarge}
        />
        {/* <div  className={classes.smallVideo}>
            <h1 style={{marginBottom:'5px', color:"white"}}>{name}</h1>
            <video playsInline muted src={userVideo} autoPlay className={classes.videoContainer}/>
          </div> */}
      </div>
    );
  }

  useEffect(() => {}, [isOnCall]);

  return (
    <div>
      {console.log(` My Stream ${myVideo2}`)}
      {console.log(` User Stream ${userVideo}`)}

      {stream && (
        <div>
          <video
            playsInline
            muted
            ref={myVideo}
            autoPlay
            className={classes.videoLarge}
          />

          <video
            playsInline
            muted
            ref={userVideo}
            autoPlay
            className={classes.videoLarge}
          />

          <div className={classes.smallVideo}>
            <video
              playsInline
              muted
              autoPlay
              className={classes.videoContainer}
              ref={myVideo2}
            />
            <h1 style={{marginLeft: "10px", color: "white"}}>{name}</h1>
          </div>
        </div>
      )}
      {!isOnCall ? (
        <>
          <LoadingDots /> <BubbleFloating />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default VideoPlayer;
