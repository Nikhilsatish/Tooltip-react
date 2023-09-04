import React, { useState } from "react";
import Tooltip from "./ToolTip";

function App() {
  const [position, setPosition] = useState("top");
  const [text, setText] = useState("ToolTip-Top");

  const changePosition = (e) => {
    switch (e.target.value) {
      case "top":
        setPosition(e.target.value);
        setText("ToolTip-Top");
        break;
      case "right":
        setPosition(e.target.value);
        setText("ToolTip-Right");
        break;
      case "bottom":
        setPosition(e.target.value);
        setText("ToolTip-Bottom");
        break;
      case "left":
        setPosition(e.target.value);
        setText("ToolTip-Left");
        break;
      default:
        setPosition(e.target.value);
        setText("ToolTip-Top");
    }
  };

  return (
    <div className="container">
      <Tooltip position={position} text={text}>
        <div className="btn-hover">Hover Me</div>
      </Tooltip>

      <div className="marginY-2">
        <button
          className="btn-primary btn-position"
          onClick={changePosition}
          value="top"
        >
          Top
        </button>
        <button
          className="btn-primary btn-position"
          onClick={changePosition}
          value="right"
        >
          Right
        </button>
        <button
          className="btn-primary btn-position"
          onClick={changePosition}
          value="bottom"
        >
          Bottom
        </button>
        <button
          className="btn-primary btn-position"
          onClick={changePosition}
          value="left"
        >
          Left
        </button>
      </div>
    </div>
  );
}

export default App;
