import "./App.css";
import { Typography, AppBar, colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Sidebar from "./Components/Sidebar";
import Notifications from "./Components/Notifications";
import Options from "./Components/Options";
import GeneratePrivateCall from "./Components/GeneratePrivateCall";
import Chat from "./Components/Chat";
import Controls from "./Components/Controls";

const useStyles = makeStyles((theme) => ({
  appBar: {
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.appBar} position="static">
        <h1 style={{ color: "white", fontSize: "50px" }}> CHAT-ROULATTE</h1>
      </div>

      <VideoPlayer />
      <Options />
      <Chat />
      <Controls />

      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
  );
};
export default App;
