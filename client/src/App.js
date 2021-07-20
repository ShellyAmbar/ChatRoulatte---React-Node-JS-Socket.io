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
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NavBar />

      <VideoPlayer />

      {/* <Chat /> */}
      <Controls />

      <Options>
        <Notifications />
      </Options>
    </div>
  );
};
export default App;
