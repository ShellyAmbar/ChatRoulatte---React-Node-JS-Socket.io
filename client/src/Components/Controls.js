import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useMemo } from "react";

const useStyles = makeStyles((theme) => ({
  gridContainerBottom: {
    position: "absolute",

    bottom: 10,

    [theme.breakpoints.down("xs")]: {
      width: "30%",
      height: "10%",
    },

    width: "30%",
    height: "10%",
  },
  paper: {
    padding: "10px",

    margin: "10px",
  },
  button: {
    padding: "20px",

    margin: "20px",
  },
}));

const Controls = () => {
  const classes = useStyles();

  const [btnTitle, setBtnTitle] = useState("Play");

  function handleClickPlay(e) {
    e.preventDefault();
    if (btnTitle === "Play") {
      setBtnTitle("Stop");
    } else if (btnTitle === "Stop") {
      setBtnTitle("Play");
    }
  }

  function handleClickNext(e) {
    e.preventDefault();
  }

  function handleClickBack(e) {
    e.preventDefault();
  }

  return (
    <Grid container justifyContent="center">
      <Grid
        className={classes.gridContainerBottom}
        container
        justifyContent="center"
        spacing={2}
      >
        {/* mine video */}

        <Grid item>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleClickNext}
          >
            Next
          </Button>
        </Grid>

        <Grid item>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleClickPlay}
          >
            {btnTitle}
          </Button>
        </Grid>

        <Grid item>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleClickBack}
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Controls;
