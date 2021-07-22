import React from "react";
import Controls from "../Controls";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
  },
}));

function ChatRoulate() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <VideoPlayer />

      <Controls />
    </div>
  );
}

export default ChatRoulate;
