import React, {useContext} from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {SocketContext} from '../../SocketContext';

const useStyles = makeStyles((theme) => ({
  smallVideo: {
  
    position: 'absolute',
    border: '5px solid white',
    top:30,
    left:30,
   
    [theme.breakpoints.down('xs')]: {
      width: "20%",
      height:" 10%", 
    },

    
  
  width: "20%",
  height:" 30%", 
  
 
  },
  videoLarge:{
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

const VideoPlayer = () => {
  const {name, myVideo, userVideo, callAccepted, callEnded,  call,stream} = useContext(SocketContext)
  const classes = useStyles();
  return (
    <div >
      
      {
        stream && (
          <div >
          <video playsInline muted ref={myVideo} autoPlay className={classes.videoLarge}/>
          <video playsInline muted ref={null} autoPlay className={classes.smallVideo}/>
   
         </div>
        )
      }
     
   
      {/* user's video */}
  {
    callAccepted && !callEnded (

      <div >
          <video playsInline muted ref={userVideo} autoPlay className={classes.videoLarge}/>
          <video playsInline muted ref={myVideo} autoPlay className={classes.smallVideo}/>
         </div>
   
    )
  }
  
    </div>
  );
};

export default VideoPlayer;
