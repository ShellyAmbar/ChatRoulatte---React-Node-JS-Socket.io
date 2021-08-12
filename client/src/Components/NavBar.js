import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HamburgerMenu } from "./HamburgerMenu";
import { useHistory } from "react-router-dom";

import firebaseConfig from "../firebase-config";

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
    // position: "sticky",
    // top: 0,
    // zIndex: 999,
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
  const history = useHistory();
  const [text, setText] = useState("Login");
  const [user, setUser] = useState(firebaseConfig.auth().currentUser);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    if (user) {
      setText("Logout");
    } else {
      setText("Login");
    }
  }, [user]);

  const onClickButtonRegister = async () => {
    if (user) {
      await firebaseConfig.auth().signOut();
    }
  };

  return (
    <NavbarContainer>
      <HamburgerMenu />

      <div className={classes.button}>
        <Button
          style={{
            borderRadius: "25px",
            border: "3px solid #ffff",
            padding: "6px",
            fontSize: "20px",
            color: "white",
            margin: "10px",
          }}
          href="/Registeration"
          onClick={onClickButtonRegister}
        >
          {text}
        </Button>
      </div>
    </NavbarContainer>
  );
};

export default NavBar;
