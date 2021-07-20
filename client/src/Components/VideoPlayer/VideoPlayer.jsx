import React, {useContext, useEffect,useState} from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {SocketContext} from '../../SocketContext';
import ResizeableAndDraggable from "../ResizeableAndDraggable";
import Draggable from "react-draggable";
import { render } from "react-dom";



const useStyles = makeStyles((theme) => ({
  smallVideo: {
   
    position: 'absolute',
    display:"flex",
   flexDirection:"column",
    top:70,
    left:"2%",
   
    [theme.breakpoints.down('xs')]: {
      width: "20%",
      height:" 10%", 
    },

    
  
  width: "20%",
  height:" 30%", 
  
 
  },
  videoContainer:{
    top:0,
    left:0,
    width: "100%",
    height:" 100%", 
  },
  videoLarge:{
    backgroundColor: "#000000",
    position: "fixed",
    right: 0,
    bottom: 0,
    minHeight: "100%",
    minWidth: "100%",
    
  },

  
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
}));

const VideoPlayer = (props) => {
  const {name, myVideo, userVideo, callAccepted, callEnded,  call,stream, isOnCall} = useContext(SocketContext)
 
 
  const classes = useStyles();

  function onCall(){

    return (
      <div >
          <video playsInline muted ref={userVideo} autoPlay className={classes.videoLarge}/>
          <div  className={classes.smallVideo}>
            <h1 style={{marginBottom:'5px', color:"white"}}>{name}</h1>
            <video playsInline muted ref={myVideo} autoPlay className={classes.videoContainer}/>
          </div>
         
      </div>
    )
  }

  function notOnCall(){

    return (
      <div >
           <video playsInline muted ref={myVideo} autoPlay className={classes.videoLarge}/>
           {/* <div  className={classes.smallVideo}>
            <h1 style={{marginBottom:'5px'}}>Other User</h1>
            <video playsInline muted ref={userVideo} autoPlay className={classes.videoContainer}/>
          </div> */}
      </div>
    )
  }

  useEffect(()=>{
 
   
  }, [isOnCall])

 
 
  return(
   
    <div>
    
    {/* { console.log(isOnCall)}
    { console.log(myVideo)}
    { console.log(userVideo)} */}
     
      { stream && 
        onCall()
      }
    </div>
  )



};

export default VideoPlayer;
