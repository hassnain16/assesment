import React from "react";
import Title from "../../components/UI/Title/Title";
import "./styles.css";
function CustomerForm() {
  return (
    <div className="customer-form-container">
      <div className="customer-form-left">
        <Title>
          <h2 className="customer-form-title">
            Customs Support - Take the load off your mind
          </h2>
        </Title>
        <p className="customer-form-get-in-touch">
          <strong>Get in touch with one of our customs experts!</strong>
          <span>
            Fill in the contact form or use the chat function on the website.
          </span>
        </p>
        <label id="radio-button-label">
          Are you a new or returning customer? *
        </label>
        <fieldset id="radio-button-field">
          <div>
            <input type="radio" value="new" name="New" />
            <label>New</label>
          </div>
          <div>
            <input type="radio" value="returning" name="Returning" />
            <label>Returning</label>
          </div>
        </fieldset>
      </div>
      <div></div>
    </div>
  );
}

export default CustomerForm;
