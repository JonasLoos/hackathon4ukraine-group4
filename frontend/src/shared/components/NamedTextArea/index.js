import React from "react";
import { useField } from "formik";

import "./index.scss";

const NamedTextArea = ({ label, ...props }) => {
  const [field] = useField(props);

  const { name, value, onChange } = field;

  return (
    <>
      <div className="input-wrapper">
        <div className="label">{label}:</div>
        <textarea
          className="input"
          name={name}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    </>
  );
};
export default NamedTextArea;
