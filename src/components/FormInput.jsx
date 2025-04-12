import React from "react";

const FormInput = ({ label, name, func, type, style }) => {
  return (
    <div className={`${style} flex flex-col p-3 `}>
      <label htmlFor="" className="label capitalize">
        {label}{" "}
      </label>
      <input
        type={type}
        name={name}
        className={`input bg-none mt-1`}
        onChange={func}
      />
    </div>
  );
};

export default FormInput;
