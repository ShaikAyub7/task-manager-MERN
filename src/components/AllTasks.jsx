import React, { useMemo, useState } from "react";
import { useGlobalContext } from "./context/Context";
import Modal from "./MOdal";

const AllTasks = () => {
  const { data, deleteTask } = useGlobalContext();

  return (
    <div className="mt-5 overflow-y-scroll max-h-120">
      {data ? (
        <>
          {data.map((task) => {
            return (
              <div
                key={task._id}
                className="card bg-amber-50 text-black max-w-2xl m-auto mt-1.5 mb-2.5 p-3"
              >
                <h2 className="mt-2">
                  <span>Title</span> : {task.title}
                </h2>
                <p className="mt-3">
                  <span>Description : </span>
                  {task.description}
                </p>
                <div className={`badge badge-dash badge-${task.status} mt-4`}>
                  {task.status}
                </div>
                <div className="flex mt-4 gap-2.5 justify-end">
                  <Modal id={task._id} />
                  <button
                    type="button"
                    className="btn btn-error"
                    onClick={() => deleteTask(task._id)}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>no task</>
      )}
    </div>
  );
};

export default AllTasks;
