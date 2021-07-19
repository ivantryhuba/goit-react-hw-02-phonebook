import React from "react";
import PropTypes from "prop-types";

import { LabelStyled, InputStyled } from "./Input.styles";

export const Input = ({
  id,
  type,
  label,
  name,
  placeholder,
  pattern,
  value,
  onChange,
  title,
  required,
}) => {
  return (
    <>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        pattern={pattern}
        value={value}
        onChange={onChange}
        title={title}
        required={required}
      />
    </>
  );
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  pattern: "",
  title: "",
  required:false
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  required: PropTypes.bool,
};
