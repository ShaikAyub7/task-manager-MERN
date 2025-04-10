import React, { useState, useMemo } from "react";
import { useGlobalContext } from "../components/context/Context";
import Card from "./Card";

const TodoTasks = () => {
  const { data, deleteTask, todoTasks } = useGlobalContext();

  return (
    <div className="mt-5 overflow-y-scroll max-h-screen scrollbar-hidden">
      {data ? (
        <>
          <Card Tasks={todoTasks} deleteTask={deleteTask} />
        </>
      ) : (
        <>
          <p>No tasks</p>
        </>
      )}
    </div>
  );
};

export default TodoTasks;
