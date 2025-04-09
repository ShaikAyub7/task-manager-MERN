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
    <form onSubmit={handleSubmit} className="form flex-row gap-4 p-5 w-90">
      <FormInput
        label="Description"
        type="text"
        style="mt-3 w-full"
        name="description"
        value={description}
        func={(e) => setDescription(e.target.value)}
      />

      <select
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-lg p-2 mt-2"
      >
        {statusEnum.map((statusItem) => (
          <option value={statusItem} key={statusItem}>
            {statusItem}
          </option>
        ))}
      </select>

      <div className="mt-4 flex justify-center">
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateTask;
