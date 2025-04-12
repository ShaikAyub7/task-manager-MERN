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
    <form onSubmit={handleSubmit} className="form  gap-4 p-2">
      <FormInput
        label="Description"
        type="text"
        style="mt-3 w-78 lg:w-full"
        name="description"
        value={description}
        func={(e) => setDescription(e.target.value)}
      />

      <select
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 mt-2 ml-3.5"
      >
        {statusEnum.map((statusItem) => (
          <option value={statusItem} key={statusItem}>
            {statusItem}
          </option>
        ))}
      </select>

      <div className="mt-4 flex justify-center ">
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateTask;
