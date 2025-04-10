import React, { useState } from "react";
import { useGlobalContext } from "../components/context/Context";
import { Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";

const Register = () => {
  const { register } = useGlobalContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    return redirect("/login");
  };
  return (
    <section className="grid h-screen place-items-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="card lg:w-96 md:w-96 p-4 bg-base-100 shadow-lg flex m-auto flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput
          type={"name"}
          label={"name"}
          name="name"
          func={(e) => setName(e.target.value)}
        />
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
