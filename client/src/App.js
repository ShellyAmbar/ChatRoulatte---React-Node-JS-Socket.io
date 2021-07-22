import "./App.css";
import { Typography, AppBar, colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

import Notifications from "./Components/Notifications";
import Options from "./Components/Options";
import GeneratePrivateCall from "./Components/GeneratePrivateCall";
import Chat from "./Components/Chat";
import Controls from "./Components/Controls";
import NavBar from "./Components/NavBar";
import Routes from "./Components/Navigation/Routes";

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    minWidth: "100%",
    height: "100%",
    minHeight: "100%",
    background: "rgba(255, 0, 0, 0.7)",

    position: "fixed",
    right: 0,
    bottom: 0,
    minHeight: "100%",
    minWidth: "100%",

    left: 0,
    bottom: 0,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NavBar />
      <Routes></Routes>
    </div>
  );
};
export default App;
