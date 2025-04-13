import React, { useMemo, useState } from "react";
import { useGlobalContext } from "./context/Context";
import Card from "./Card";
const AllTasks = () => {
  const { data, loading } = useGlobalContext();
  return (
    <div className="mt-2 max-h-screen overflow-y-scroll scrollbar-hidden m-auto ">
      <div className="stat-title m-auto flex justify-center items-center">
        Total Tasks{" "}
        {data && data.length > 0 ? (
          <span className="ml-1 text-gray-500"> {data.length}</span>
        ) : (
          <span className="badge badge-primary badge-outline ml-2">0</span>
        )}
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <span className="loading loading-spinner loading-md text-primary"></span>
        </div>
      ) : (
        <>
          <Card Tasks={data} />{" "}
        </>
      )}
    </div>
  );
};

export default AllTasks;
