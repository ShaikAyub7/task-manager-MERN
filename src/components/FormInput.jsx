import React from "react";

const FormInput = ({ label, name, func, type, style }) => {
  return (
    <div className={`${style} flex flex-col`}>
      <label htmlFor="" className="label">
        {label}{" "}
      </label>
      <input
        type={type}
        name={name}
        className={`input bg-none `}
        onChange={func}
      />
    </div>
  );
};

export default FormInput;
