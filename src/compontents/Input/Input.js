import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ placeholder, name, label }) => {
  const [inputValue, setInputValue] = useState("");
  const [isErrorVisible, toggleError] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);

    const regex = /[0-9]+/;
    if (regex.test(value)) {
      toggleError(true);
    } else {
      toggleError(false);
    }
  };

  return (
    <>
      <input placeholder={placeholder} data-testid="sample-input" id={name} value={inputValue} onChange={handleChange} />
      <label htmlFor={name}>{label}</label>
      {isErrorVisible && (
        <p>
          <strong>Error</strong> can't pass digits
        </p>
      )}
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

Input.defaultProps = {
  placeholder: "Default placeholder value",
};

export default Input;
