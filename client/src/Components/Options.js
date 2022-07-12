import React, {useContext, useState} from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  Container,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Assignment, Phone, PhoneDisabled} from "@material-ui/icons";
import {SocketContext} from "../Context/SocketContext";

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

    position: "fixed",
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
    backgroundColor: "#282c34",
    color: "white",
    alignSelf: "center",
    padding: "10px",
  },
}));

function Options({children}) {
  const {
    name,
    setname,
    callEnded,
    me,
    callUser,
    callAccepted,
    leaveCall,
    isOnCall,
  } = useContext(SocketContext);
  const [idToCall, setidToCall] = useState("");
  const classes = useStyles();
  const [show, setShow] = useState(true);

  const handleClose = () => {
    // if (isOnCall) {
    //   leaveCall();
    // }
    setShow(false);
  };

  return show ? (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        {/* <Button  onClick={handleClose}> X </Button> */}
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                color="#ffff"
                label="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<Assignment fontSize="large" />}
                >
                  Copy your ID
                </Button>
              </CopyToClipboard>
            </Grid>

            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Make a call
              </Typography>
              <TextField
                color="white"
                label="Id to call"
                value={idToCall}
                onChange={(e) => setidToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  className={classes.margin}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<PhoneDisabled fontSize="large" />}
                  onClick={leaveCall}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  className={classes.margin}
                  variant="contained"
                  color="secondary"
                  fullWidth
                  startIcon={<Phone fontSize="large" />}
                  onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  ) : (
    <div></div>
  );
}

export default Options;
