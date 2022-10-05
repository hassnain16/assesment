import React from "react";
import Button from '../Button/Button';
import Title from "../Title/Title";
import './styles.css';
function InfoSection({ children, details, align, ...porps }) {
  return (
    <div className={align === "left" ? "left" : "right"}>
      <Title>{children}</Title>
      <p className="section-details">{details}</p>
      {
        align === "right" && <Button
          id="moreInformation"
          name="moreInformation"
          title="More Information"
        />
      }
    </div>
  );
}

export default InfoSection;
