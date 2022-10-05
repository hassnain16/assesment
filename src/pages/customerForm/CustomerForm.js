import React from "react";
import {
  InputField,
  SelectField,
  RadioButtonField,
} from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Title from "../../components/UI/Title/Title";
import PersonImage from "../../assets/profile-image-large.png";
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
        <SelectField
          id="serviceChoice"
          name="serviceChoice"
          value=""
          placeholder="Choice of service *"
        />
        <div id="form-group-divider"></div>
        <div class="form-group-area">
          <InputField
            id="firstName"
            name="firstName"
            value=""
            placeholder="First name *"
          />
          <InputField
            id="lastName"
            name="lastName"
            value=""
            placeholder="Last name *"
          />
        </div>
        <div class="form-group-area">
          <InputField
            id="company"
            name="company"
            value=""
            placeholder="Company"
          />
          <InputField id="email" name="email" value="" placeholder="Email *" />
        </div>
        <div class="form-group-area">
          <InputField
            id="company"
            name="company"
            value=""
            placeholder="Company"
          />
          <SelectField
            id="country"
            name="country"
            value=""
            placeholder="Country"
          />
        </div>
        <div class="form-group-area">
          <InputField
            id="company"
            name="company"
            value=""
            placeholder="Company"
          />
          <SelectField
            id="country"
            name="country"
            value=""
            placeholder="Country"
          />
        </div>
        <div class="form-group-area">
          <RadioButtonField
            id="company"
            name="company"
            value=""
            placeholder="I agree with the Terms and Conditions *"
          />
          <SelectField
            id="country"
            name="country"
            value=""
            placeholder="Country"
          />
        </div>
        <div class="form-group-area">
          <Button
            id="request-qoute"
            name="company"
            title="Request a quote"
            className="form-btn-1"
          />
        </div>
      </div>
      <div>
        <div id="form-group-divider-vertical"></div>
      </div>
      <div className="form-group-right">
        <div>
          <p className="customer-form-get-in-touch">
            <strong>You prefer a personal contact?</strong>
            <span>Please find the phone numbers of our locations below.</span>
          </p>
        </div>
        <div>
          <SelectField
            id="customerSupport"
            name="customerSupport"
            value=""
            placeholder="Customer Support"
          />
        </div>
        <div>
          <Button
            id="request-qoute"
            name="company"
            title="Go"
            className="form-btn-1"
          />
        </div>
        <div id="form-group-divider"></div>
        <div>
          <label className="form-label">„Let’s grow together!“</label>
          <div className="form-profile-area">
            <img src={PersonImage} alt="profile-picture" />
            <span>
              <label>Michael Doe</label>
              <p>Customer Support Lead CSG</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
