import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
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
    background: "rgba(0, 0, 0, 0.7)",

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

  return <div className="App">
    <Routes />
  </div>;
};
export default App;
