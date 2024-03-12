import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ position, children }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div className={`${position}`}>Thanks for hovering! I am a tooltip</div>
      )}
    </div>
  );
};

export default Tooltip;
