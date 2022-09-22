import React from "react";
import Title from "../Title/Title";
function InfoSection({ children, details, align, ...porps }) {
  return (
    <div className={align === "left" ? "left" : "right"}>
      <Title>{children}</Title>
      <p className="section-details">{details}</p>
    </div>
  );
}

export default InfoSection;
