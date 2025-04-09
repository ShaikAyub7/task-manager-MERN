import React, { useState } from "react";
import { useGlobalContext } from "../components/context/Context";

const Register = () => {
  const { register } = useGlobalContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>register</h2>
      <label htmlFor="">name</label>
      <input
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="">password</label>
      <input
        type="text"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Register;
