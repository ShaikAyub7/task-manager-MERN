import React, { useState } from "react";
import { useGlobalContext } from "../components/context/Context";
import { Link, redirect, useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { toast } from "react-toastify";

const Login = () => {
  const { login } = useGlobalContext();
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      setEmail("");
      setPassword("");
      navigation("/");
    } catch (error) {
      console.error(error);
      toast.error("Login failed, please try again.");
    }
  };

  return (
    <section className="grid h-screen place-items-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="card lg:w-96 md:w-96 p-4 bg-base-100 shadow-lg flex m-auto flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type={"email"}
          label={"email"}
          name="email"
          style={"w-full text-center  p-3"}
          func={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name="password"
          style={"w-full text-center  p-3"}
          func={(e) => setPassword(e.target.value)}
        />
        <div className=" mt-4 w-full block">
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </div>

        <p className="text-center">
          Not at member ?{" "}
          <Link
            to={"/register"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            Register now
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
