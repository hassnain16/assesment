import React from "react";
import Title from "../../components/UI/Title/Title";
import Button from "../../components/UI/Button/Button";
import "./styles.css";

function Agents() {
  const agentSubSection = (title, description, isDivider) => {
    return (
      <div className="agent-sub-section-container">
        <div className="agent-sub-section">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {isDivider && <div className="agent-divider" />}
      </div>
    );
  };

  return (
    <div className="agents-section">
      <Title>
        <h2 className="agent-title">
          The leading customs agent in Europe and UK
        </h2>
      </Title>
      <div className="sub-section-container">
        {agentSubSection("20 +", "years of experience", true)}
        {agentSubSection("400", "qualified customs specialists", true)}
        {agentSubSection("20", "strategic locations", true)}
        {agentSubSection("5", "countries")}
      </div>
      <Button title="Get in touch" />
    </div>
  );
}

export default Agents;
