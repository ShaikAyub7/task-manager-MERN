import React, { useMemo, useState } from "react";
import { useGlobalContext } from "./context/Context";
import Card from "./Card";
const AllTasks = () => {
  const { data, deleteTask, loading } = useGlobalContext();

  return (
    <div className="mt-5 max-h-screen overflow-y-scroll scrollbar-hidden ">
      {loading ? (
        <div className="  grid place-items-center p-12 mt-4 ">
          <span className="loading loading-bars loading-sm"></span>
        </div>
      ) : (
        <>
          <Card Tasks={data} deleteTask={deleteTask} />{" "}
        </>
      )}
    </div>
  );
};

export default AllTasks;
