import React from "react";

import "./styles.css";
const InputField = ({
  id,
  name,
  value,
  placeholder,
  className,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    onchange(e);
  };

  return (
    <input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={`input custom-input ${className}`}
    />
  );
};

const PhoneInputField = ({
  id,
  name,
  value,
  placeholder,
  className,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    onchange(e);
  };
  // "input".intlTelInput({
  //   utilsScript:
  //     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
  // });

  return (
    <div class="input-group">
      <input type="tel" class="form-control" />
      <span class="input-group-addon">Tel</span>
    </div>
  );
  {
    /* <input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={`input custom-input ${className}`}
    /> 
  );*/
  }
};

const SelectField = ({
  id,
  name,
  value,
  placeholder,
  className,
  onChange,
  options,
  ...props
}) => {
  const handleChange = (e) => {
    onchange(e);
  };

  return (
    <select
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={`input custom-select ${className}`}
    >
      <option value="">{placeholder}</option>
      {options?.map((option, i) => {
        return (
          <option value={option.value} onClick={onChange}>
            {options.label}
          </option>
        );
      })}
    </select>
  );
};

const RadioButtonField = ({
  id,
  name,
  value,
  placeholder,
  className,
  onChange,
  options,
  ...props
}) => {
  const handleChange = (e) => {
    onchange(e);
  };

  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`radio-group ${className}`}
      />
      <label className="radio-group-label" for="html">
        {props.placeholder}
      </label>
    </>
    // <select
    //   id={id}
    //   name={name}
    //   value={value}
    //   placeholder={placeholder}
    //   onChange={handleChange}
    //   className={`input custom-select ${className}`}
    // >
    //</select>
  );
};

export { InputField, SelectField, RadioButtonField };
