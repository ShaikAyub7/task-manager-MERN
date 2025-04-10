import React, { useMemo, useState } from "react";
import { useGlobalContext } from "./context/Context";
import Card from "./Card";
const AllTasks = () => {
  const { data, deleteTask } = useGlobalContext();

  return (
    <div className="mt-5 max-h-screen overflow-y-scroll scrollbar-hidden ">
      {data ? (
        <>
          <Card Tasks={data} deleteTask={deleteTask} />{" "}
        </>
      ) : (
        <>no task</>
      )}
    </div>
  );
};

export default AllTasks;
