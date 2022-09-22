import React from "react";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import "./styles.css";
function Baner() {
  return (
    <div className="banner-container">
      {/* <img src={BanerImage} alt="" /> */}
      <div className="banner">
        <div className="banner-1">
          <Title>
            <h1 className="banner-title">Headache on complex customs matters for your business?</h1>
          </Title>
          <p className="banner-text">
            Customs Support is your neutral full-service customs broker for
            complex customs matters with 20+ years of expertise in Europe and
            over 400 customs specialists who are happy to take the load off your
            mind!
          </p>
          <Button id="quote-now" title="Get your quote now" />
        </div>
        <div className="banner-2">
          <ul className="banner-list">
            <li>Fast and accurate customs clearance delivery</li>
            <li>EU-wide customs coverage</li>
            <li>Online and real-time control of customs processes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Baner;
