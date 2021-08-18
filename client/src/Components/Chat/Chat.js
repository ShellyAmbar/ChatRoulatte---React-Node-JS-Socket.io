import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  chat: {
    width: "1000px",
    height: "200px",
    [theme.breakpoints.down("xs")]: {
      width: "200px",
      height: "100px",
    },
  },
  gridContainer: {
    position: "absolute",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    background: "rgba(255, 0, 0, 0.4)",
    padding: "10px",
    border: "2px solid black",
    margin: "10px",
  },
}));

const Chat = () => {
  const classes = useStyles();

  return <div className={classes.chat}></div>;
};

export default Chat;
