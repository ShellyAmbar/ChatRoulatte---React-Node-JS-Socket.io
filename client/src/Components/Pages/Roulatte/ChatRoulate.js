import React, { useEffect, useState } from "react";
import Controls from "../../Controls";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

import { makeStyles } from "@material-ui/core/styles";
import "./Chatroulate.css"



function ChatRoulate() {
  
 

  return (
    <div className="roulate-container">
      <VideoPlayer />

      <Controls />
    </div>
  );
}

export default ChatRoulate;
