import React, { useEffect, useState } from "react";
import Controls from "../../Controls";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

import { makeStyles } from "@material-ui/core/styles";
import "./Chatroulate.css"

const useStyles = makeStyles((theme) => ({
  wrapper: {
    background: "rgba(0, 0, 0, 0.7)",
    width: "100%",
  
    height: "100%",
    minHeight: "100%",
  
  },
}));

function ChatRoulate() {
  const classes = useStyles();
  // const [user, setUser] = useState(auth.currentUser);

  // useEffect(() => {}, [user]);

  return (
    <div className="roulate-container">
      <VideoPlayer />

      <Controls />
    </div>
  );
}

export default ChatRoulate;
