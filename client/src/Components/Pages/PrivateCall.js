import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Options from "../Options";
import Notifications from "../Notifications";
import { SocketContext } from "../../SocketContext";
import { Button } from "@material-ui/core";
import { PhoneDisabled } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
  },
  buttonConatinerStyle: {
    flexDirection: "column",
    justifyContent: "flex-end",
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
    <div className={classes.wrapper}>
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
