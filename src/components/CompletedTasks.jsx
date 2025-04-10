import React, { useState, useMemo } from "react";
import { useGlobalContext } from "../components/context/Context";
import Modal from "./MOdal";
import Card from "./Card";

const CompletedTasks = () => {
  const { data, deleteTask, completedTasks } = useGlobalContext();

  return (
    <div className="mt-5 overflow-y-scroll max-h-screen scrollbar-hidden">
      <Card Tasks={completedTasks} deleteTask={deleteTask} />
    </div>
  );
};

export default CompletedTasks;
