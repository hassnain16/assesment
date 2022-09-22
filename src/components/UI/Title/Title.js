import React from "react";

import "./styles.css";
function Title({ children, ...props }) {
  return (
    <div className="title-section">
      {children}
      <div className="title-bar" />
    </div>
  );
}

export default Title;
