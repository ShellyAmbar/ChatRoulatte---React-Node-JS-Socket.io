import { colors } from "@material-ui/core";
import React from "react";
import "./LoadingDots.css";

function LoadingDots() {
  return (
    <div className="container">
      <div className="container_dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default LoadingDots;
