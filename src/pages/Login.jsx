import React, { useState } from "react";
import { useGlobalContext } from "../components/context/Context";

const Login = () => {
  const { login } = useGlobalContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
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

export default Login;
