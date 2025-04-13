import React, { useState, useMemo } from "react";
import { useGlobalContext } from "../components/context/Context";
import Card from "./Card";

const CompletedTasks = () => {
  const { data, deleteTask, completedTasks } = useGlobalContext();

  return (
    <div className="mt-5 overflow-y-scroll max-h-screen scrollbar-hidden">
      <div className="stat-title m-auto flex justify-center items-center">
        Total Tasks{" "}
        {completedTasks && completedTasks.length > 0 ? (
          <span className="ml-1 text-gray-500"> {completedTasks.length}</span>
        ) : (
          <span className="badge badge-primary badge-outline ml-2">0</span>
        )}
      </div>
      {completedTasks && completedTasks.length > 0 ? (
        <>
          <Card Tasks={completedTasks} deleteTask={deleteTask} />
        </>
      ) : (
        <>
          <div className="grid place-items-center p-12 mt-4">
            <span className="loading loading-bars loading-sm"></span>
          </div>
          <div className="text-center mt-4">
            <h2 className="text-lg font-semibold">No tasks available</h2>
            <p className="text-gray-500">Please create a new task.</p>
          </div>
        </>
      )}{" "}
    </div>
  );
};

export default CompletedTasks;
