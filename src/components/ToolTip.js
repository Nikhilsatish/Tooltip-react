import React, { useState } from "react";
import "../Tooltip.css";

function Tooltip({ position, text, children }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(true);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isVisible && <div className={`tooltip tooltip-${position}`}>{text}</div>}
    </div>
  );
}

export default Tooltip;
