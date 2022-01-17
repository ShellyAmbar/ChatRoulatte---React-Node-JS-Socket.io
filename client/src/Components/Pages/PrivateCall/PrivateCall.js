import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";
import Options from "../../Options";
import Notifications from "../../Notifications";
import { SocketContext } from "../../../Context/SocketContext";
import { Button } from "@material-ui/core";
import { PhoneDisabled } from "@material-ui/icons";
import "./PrivateCall.css"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "rgba(0, 0, 0, 0.7)",
    width: "100%",
  
    height: "100vh",
    minHeight: "100vh"
    
  },
  buttonConatinerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
  },
  buttonStyle: {
    width: "150px",
    position: "absolute",
    bottom: 35,
  },
}));

function PrivateCall() {
  const { callEnded, callAccepted, leaveCall, isOnCall } =
    useContext(SocketContext);
  const classes = useStyles();
  return (
    <div className="private-call-container">
      <VideoPlayer />
      {isOnCall ? (
        <div className={classes.buttonConatinerStyle}>
          <Button
            className={classes.buttonStyle}
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<PhoneDisabled fontSize="large" />}
            onClick={leaveCall}
          >
            Hang Up
          </Button>
        </div>
      ) : (
        <Options>
          <Notifications />
        </Options>
      )}
    </div>
  );
}

export default PrivateCall;
