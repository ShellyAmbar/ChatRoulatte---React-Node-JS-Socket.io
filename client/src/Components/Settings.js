import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const useStyles = makeStyles((theme) => ({
  NavbarContainer: {
    height: "60px",
    width: "100%",
    borderBottom: "1px solid #FFFF",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    padding: "0 1.5em",
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

const Settings = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = React.useState("");

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

  const changeCountryHandler = (value) => {
    setCountry(value);
  };

  const changeGenderHandler = (value) => {
    setGender(value);
  };

  const changeAgeHandler = (value) => {
    setAge(value);
  };

  return (
    <div className={classes.NavbarContainer}>
      <div className={classes.button}>
        <h2
          style={{
            fontSize: "20px",
            color: "white",
          }}
        >
          SignUp
        </h2>
      </div>
      <div className={classes.button}>
        <h2
          style={{
            fontSize: "20px",
            color: "white",
          }}
        >
          Login
        </h2>
      </div>

      <div className={classes.button}>
        <div>
          <h2
            style={{
              fontSize: "20px",
              color: "white",
              marginBottom: "5px",
            }}
          >
            Country:
          </h2>
          <Select
            options={coutriesOptions}
            value={country}
            onChange={changeCountryHandler}
          />
        </div>
      </div>

      <div className={classes.button}>
        <div>
          <h2
            style={{
              fontSize: "20px",
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
      </div>

      <div className={classes.button}>
        <div>
          <h2
            style={{
              fontSize: "20px",
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
      </div>
    </div>
  );
};

export default Settings;
