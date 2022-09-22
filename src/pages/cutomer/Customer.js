import React from "react";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import "./styles.css";
function Customer() {
  return (
    <div className="customer-container">
      {/* <img src={BanerImage} alt="" /> */}
      <div className="customer-banner">
        <div className="customer-1">
          <Title>
            <h1 className="customer-title">Customs clearance after Brexit</h1>
          </Title>
          <p className="customer-text">
            Customs Support is your neutral full-service customs broker for
            complex customs matters with 20+ years of expertise in Europe and
            over 400 customs specialists who are happy to take the load off your
            mind!
          </p>
          <Button id="quote-now" title="Brexit and customs: get ready!" />
        </div>
        <div className="customer-2">
          {/* <ul className="customer-list">
            <li>Fast and accurate customs clearance delivery</li>
            <li>EU-wide customs coverage</li>
            <li>Online and real-time control of customs processes</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Customer;
