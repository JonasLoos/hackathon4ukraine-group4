import React from "react";
import { useField } from "formik";

import "./index.scss";

const NamedInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const { name, value, onChange } = field;
  const { touched, error } = meta;

  return (
    <>
      <div className="input-wrapper">
        <div className="label">{label}</div>
        <input
          className="input"
          name={name}
          value={value}
          onChange={onChange}
        ></input>
      </div>
    </>
  );
};
export default NamedInput;
