import React from "react";
import CargoImage from "../../assets/cargo-image-large.png";
import InfoSection from "../../components/UI/InfoSection/InfoSection";
import "./styles.css";
function Other() {
  const otherSection = () => {
    return <img className="other-section-image" alt="cargo" src={CargoImage} />;
  };

  return (
    <div className="other-container">
      <div className="other-section">
        <div>{otherSection()}</div>
        <div className="other-right-section">
          <InfoSection
            align="left"
            details="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr."
          >
            <h2 class="brands-title">Lorem ipsum dolor sit amet</h2>
          </InfoSection>
        </div>
      </div>
      <div className="other-section">
        <div className="other-right-section">
          <InfoSection
            align="right"
            details="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr."
          >
            <h2 class="brands-title">Lorem ipsum dolor sit amet</h2>
          </InfoSection>
        </div>
        <div>{otherSection()}</div>
      </div>
    </div>
  );
}

export default Other;
