import React from "react";

import "./styles.css";
function Title({ children, alignment, ...props }) {
  return (
    <div className={`title-section ${alignment}`}>
      {children}
      <div className="title-bar" />
    </div>
  );
}

export default Title;
