import React, { useState } from "react";
import { useGlobalContext } from "../components/context/Context";
import FormInput from "./FormInput";

const CreateTaskForm = () => {
  const { createTask, getTasks } = useGlobalContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    getTasks();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form flex gap-2 items-center justify-center"
      >
        <FormInput
          label={"Title"}
          name={"title"}
          type={"text"}
          style={"rounded-lg"}
          func={(e) => setTitle(e.target.value)}
        />
        <FormInput
          label={"Description"}
          name={"description"}
          style={"rounded-2xl"}
          type={"text"}
          func={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mt-6">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
