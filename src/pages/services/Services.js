import React from "react";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import ServiceImage1 from "../../assets/service-1.png";
import ServiceImage2 from "../../assets/service-2.png";
import ServiceImage3 from "../../assets/service-3.png";
import ServiceImage4 from "../../assets/service-4.png";
import ServiceImage5 from "../../assets/service-5.png";
import ServiceImage6 from "../../assets/service-6.png";
import CargoImage from "../../assets/cardo-image.png";
import "./styles.css";
function Services() {
  const serviceSubSection = (image, imageAlt, title, description) => {
    return (
      <div className="service-sub-section-container">
        <img src={image} alt={imageAlt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <>
      <div className="services-container">
        <div className="service-header">
          <Title>
            <h2 className="service-title">
              We offer end-to-end customs services with fast, accurate and
              compliant customs in multiple countries
            </h2>
          </Title>
          <Button title="Get in touch" />
        </div>
        <div className="services-section">
          {serviceSubSection(
            ServiceImage1,
            "Fast and accurate",
            "Fast and accurate",
            "We offer end-to-end customs services with fast, accurate and compliant customs in multiple countries"
          )}
          {serviceSubSection(
            ServiceImage2,
            "Strict compliance",
            "Strict compliance",
            "We make sure you are compliant with regulations to mitigate customs-related risk and exposure."
          )}
          {serviceSubSection(
            ServiceImage3,
            "Fast and accurate",
            "Fast and accurate",
            "Our highly skilled professionals offer customs expert advice to optimise your duty management and help you save costs."
          )}
          {serviceSubSection(
            ServiceImage4,
            "Online and real-time control",
            "Online and real-time control",
            "Real-time compliance and finance dashboards to manage your customer portfolio."
          )}
          {serviceSubSection(
            ServiceImage5,
            "EU-wide coverage",
            "EU-wide coverage",
            "We have offices in 5 European countries, but thanks to our network of trusted partners we have EU-wide coverage."
          )}
          {serviceSubSection(
            ServiceImage6,
            "Innovation & digitalisation",
            "Innovation & digitalisation",
            "We use advanced IT-tools for customs declaration and customs data exchange."
          )}
        </div>
      </div>
      <img id="cargo-image" alt="cargo-image" src={CargoImage} />
    </>
  );
}

export default Services;
