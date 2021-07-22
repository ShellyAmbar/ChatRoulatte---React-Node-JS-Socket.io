import React, { useContext, useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  Container,
  colors,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { SocketContext } from "../../SocketContext";

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
    minWidth: "100%",
    height: "100%",
    minHeight: "100%",
    background: "rgba(52, 52, 52, 0.4)",

    position: "absolute",
    right: 0,
    bottom: 0,
    minHeight: "100%",
    minWidth: "100%",

    left: 0,
    bottom: 0,
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
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    position: "fixed",
    right: 0,
    bottom: 0,
    minHeight: "100%",
    minWidth: "100%",
  },
}));
function Registeraion() {
  const classes = useStyles();
  const { myVideo } = useContext(SocketContext);
  const [Name, setName] = useState("");
  const register = () => {};
  return (
    <div className={classes.container}>
      <video
        playsInline
        muted
        autoPlay
        ref={myVideo}
        className={classes.videoLarge}
      />

      {/* <video
        playsInline
        muted
        ref={myVideo}
        autoPlay
        className={classes.videoLarge}
      />

      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Typography gutterBottom variant="h6">
            Login
          </Typography>
          <TextField
            label="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <Button
            className={classes.margin}
            variant="contained"
            color="primary"
            onClick={register}
          >
            Register
          </Button>
        </form>
      </Paper> */}
    </div>
  );
}

export default Registeraion;
