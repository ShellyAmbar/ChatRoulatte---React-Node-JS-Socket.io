import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerMenu } from "./HamburgerMenu";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 60px;
  z-index: 99;

  border-bottom: 1px solid #fff;
`;

const useStyles = makeStyles((theme) => ({
  NavbarContainer: {
    position: "absolute",
    height: "60px",
    width: "100%",
    borderBottom: "1px solid #FFFF",
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  paper: {
    padding: "10px",

    margin: "10px",
  },
  button: {
    padding: "10px",
    margin: "10px",
  },
  toggle: {
    margin: "50px",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <NavbarContainer>
      <HamburgerMenu />
      <div className={classes.button}>
        <h2
          style={{
            borderRadius: "25px",
            border: "3px solid #ffff",
            padding: "6px",
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
            borderRadius: "25px",
            border: "3px solid #ffff",
            padding: "6px",
            fontSize: "20px",
            color: "white",
          }}
        >
          Login
        </h2>
      </div>
    </NavbarContainer>
  );
};

export default NavBar;
