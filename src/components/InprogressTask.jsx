import React, { useState, useMemo } from "react";
import { useGlobalContext } from "../components/context/Context";
import Card from "./Card";

const InprogressTasks = () => {
  const { data, deleteTask, inprogressTasks } = useGlobalContext();

  return (
    <div className="mt-5 overflow-y-scroll max-h-screen scrollbar-hidden">
      <Card Tasks={inprogressTasks} deleteTask={deleteTask} />
    </div>
  );
};

export default InprogressTasks;
