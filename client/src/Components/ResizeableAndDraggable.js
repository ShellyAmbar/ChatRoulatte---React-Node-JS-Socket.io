import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

const ResizeableAndDraggable = ({ children }) => {
  return (
    <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      {children}
    </Draggable>
  );
};

export default ResizeableAndDraggable;
