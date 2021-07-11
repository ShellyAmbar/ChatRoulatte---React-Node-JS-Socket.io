import React, { useContext, useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  TextField,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assessment, Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketContext } from "../SocketContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    position: "absolute",

    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    background: "rgba(255, 0, 0, 0.2)",
    padding: "10px 20px",
    border: "2px solid black",
  },
}));

function Options({ children }) {
  const { name, setname, callEnded, me, callUser, callAccepted } =
    useContext(SocketContext);
  const [idToCall, setidToCall] = useState("");
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography gutterBottom variant="h6">
                Account Info
              </Typography>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                fullWidth
              />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button />
              </CopyToClipboard>
            </Grid>
          </Grid>
        </form>
      </Paper>
      {children}
    </Container>
  );
}

export default Options;
