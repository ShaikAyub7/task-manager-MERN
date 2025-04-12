import React, { useState } from "react";
import { useGlobalContext } from "../components/context/Context";
import { Link, redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";

const Register = () => {
  const { register } = useGlobalContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };
  return (
    <section className="grid h-screen place-items-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="card lg:w-96 md:w-96 p-3 bg-base-100 shadow-lg flex m-auto flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type={"name"}
          label={"name"}
          name="name"
          style={"w-full text-center  p-1 pl-4"}
          func={(e) => setName(e.target.value)}
        />
        <FormInput
          type={"email"}
          label={"email"}
          name="email"
          style={"w-full text-center  pl-4"}
          func={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name="password"
          style={"w-full text-center  p-1 pl-4"}
          func={(e) => setPassword(e.target.value)}
        />
        <div className=" mt-4 ">
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </div>

        <p className="text-center">
          Already a member ?{" "}
          <Link
            to={"/login"}
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login now
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
