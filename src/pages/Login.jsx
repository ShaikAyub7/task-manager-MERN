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

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      login({ email, password });
      setEmail("");
      setPassword("");
      navigation("/");
      toast.success("Login successful!");
    } catch (error) {
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
          func={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name="password"
          func={(e) => setPassword(e.target.value)}
        />
        <div className=" mt-4 ">
          {/* <SubmitBtn text={"Login"} /> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <button className="btn btn-secondary">
          <Link to={"/"}>Guest</Link>
        </button>

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
