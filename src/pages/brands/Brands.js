import React from "react";
import BrandsImage from "../../assets/brands-image-large.png";
import InfoSection from "../../components/UI/InfoSection/InfoSection";

import "./styles.css";
function Brands() {
  return (
    <div className="brands-section">
      <div className="brands-left-section">
        <img alt="brands" src={BrandsImage} />
      </div>
      <div className="brands-right-section">
        <InfoSection
          align="left"
          details="We are the trusted partner for customs matters of more than 7000 companies
           across Europe. Since 20 years we successfully operate with customers from small and 
           large good owners to freight forwarders and digital platforms across various industries."
        >
          <h2 class="brands-title">Who we work with</h2>
        </InfoSection>
      </div>
    </div>
  );
}

export default Brands;
