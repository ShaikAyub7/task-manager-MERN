import React, { useState } from "react";
import { useGlobalContext } from "../components/context/Context";
import FormInput from "./FormInput";

const CreateTask = () => {
  const { createTask, getTasks } = useGlobalContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    getTasks();
  };
  return (
    <div className="p-4 max-w-4xl m-auto ">
      <form
        onSubmit={handleSubmit}
        className="form flex gap-2 items-center justify-center"
      >
        <FormInput
          label={"title"}
          name={"title"}
          type={"text"}
          func={(e) => setTitle(e.target.value)}
        />
        <FormInput
          label={"description"}
          name={"description"}
          type={"text"}
          func={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mt-6">
          create
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
