import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../components/context/Context";
import FormInput from "./FormInput";

const UpdateTask = ({ id }) => {
  const { data, updateTask } = useGlobalContext();
  const statusEnum = ["todo", "inprogress", "completed"];

  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  useEffect(() => {
    const task = data.find((task) => task._id === id);
    if (task) {
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [id, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ description, status, id });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form flex flex-col md:flex-row md:items-center gap-4 p-4 w-full justify-center"
    >
      <FormInput
        label="Description"
        type="text"
        style="w-full md:w-72 rounded-lg"
        name="description"
        value={description}
        func={(e) => setDescription(e.target.value)}
      />

      <select
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 mt-5 w-full md:w-48"
      >
        {statusEnum.map((statusItem) => (
          <option value={statusItem} key={statusItem}>
            {statusItem}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="btn btn-primary w-full md:w-auto px-6 mt-5"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateTask;
