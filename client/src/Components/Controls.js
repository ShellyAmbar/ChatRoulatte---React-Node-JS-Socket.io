import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  gridContainerTop: {
    position: "absolute",
    border: "5px solid white",
    top: 10,
    right: 5,

    [theme.breakpoints.down("xs")]: {
      width: "40%",
      height: "10%",
    },

    width: "40%",
    height: " 10%",
  },
  gridContainerBottom: {
    position: "absolute",
    border: "5px solid white",
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

  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = React.useState("");
  const [spacing, setSpacing] = React.useState(2);
  const coutriesOptions = useMemo(() => countryList().getData(), []);
  const genderTypes = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
    { value: "All", label: "All" },
  ];
  const ageTypes = [
    { value: "18-30", label: "18-30" },
    { value: "30-40", label: "30-40" },
    { value: "40-50", label: "40-50" },
    { value: "50+", label: "50+" },
    { value: "60+", label: "60+" },
    { value: "70+", label: "70+" },
    { value: "80+", label: "80+" },
  ];

  const changeHandler = (value) => {
    setCountry(value);
  };

  const changeGenderHandler = (value) => {
    setGender(value);
  };

  const changeAgeHandler = (value) => {
    setAge(value);
  };

  return (
    <Grid container justify="center">
      <Grid
        className={classes.gridContainerTop}
        container
        justify="center"
        spacing={2}
      >
        <Grid item className={classes.button}>
          <h2
            style={{
              fontSize: "30px",
              color: "white",
            }}
          >
            SignUp
          </h2>
        </Grid>
        <Grid item className={classes.button}>
          <h2
            style={{
              fontSize: "30px",
              color: "white",
            }}
          >
            Login
          </h2>
        </Grid>

        <Grid item className={classes.button}>
          <div>
            <h2
              style={{
                fontSize: "30px",
                color: "white",
                marginBottom: "5px",
              }}
            >
              Country:
            </h2>
            <Select
              options={coutriesOptions}
              value={country}
              onChange={changeHandler}
            />
          </div>
        </Grid>

        <Grid item className={classes.button}>
          <div>
            <h2
              style={{
                fontSize: "30px",
                color: "white",
                marginBottom: "5px",
              }}
            >
              Gender:
            </h2>
            <Select
              options={genderTypes}
              value={gender}
              onChange={changeGenderHandler}
            />
          </div>
        </Grid>

        <Grid item className={classes.button}>
          <div>
            <h2
              style={{
                fontSize: "30px",
                color: "white",
                marginBottom: "5px",
              }}
            >
              Age:
            </h2>
            <Select
              native
              options={ageTypes}
              value={age}
              onChange={changeAgeHandler}
            ></Select>
          </div>
        </Grid>
      </Grid>

      <Grid
        className={classes.gridContainerBottom}
        container
        justify="center"
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
