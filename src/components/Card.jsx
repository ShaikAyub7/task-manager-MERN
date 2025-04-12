import React, { useMemo } from "react";
import Modal from "./Modal";
import UpdateTask from "./UpdateTask";
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useGlobalContext } from "./context/Context";

const Card = ({ Tasks }) => {
  const { searchTerm, loading, deleteTask } = useGlobalContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <p>loading</p>
        <span className="loading loading-spinner loading-md text-primary"></span>
      </div>
    );
  }
  const filteredTasks = useMemo(() => {
    if (!searchTerm.trim()) return Tasks;
    return Tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [Tasks, searchTerm]);

  return (
    <div>
      {filteredTasks?.map((task) => {
        console.log(task);
        const badgeClasses = [
          task.status === "todo" && "badge-secondary",
          task.status === "inprogress" && "badge-info",
          task.status === "completed" && "badge-success",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <div
            key={task._id}
            className="card bg-white text-black max-w-xl m-auto mt-4 mb-2.5 p-3 shadow-md rounded-2xl hover:shadow-lg transition duration-300 ease-in-out border border-gray-300"
          >
            <h2
              className={`mt-2 ${
                task.status === "completed" ? "line-through decoration-0" : ""
              } text-sm`}
            >
              <span className="text-gray-400 text-sm">Title</span>: {task.title}
            </h2>
            <p className="mt-3 text-sm">
              <span className="text-gray-400 text-sm">Description:</span>{" "}
              {task.description}
            </p>
            <div className={`badge badge-soft mt-2.5 text-sm ${badgeClasses}`}>
              {task.status}
            </div>

            <div className="flex mt-1 gap-2.5 justify-between p-2">
              <div className="flex items-end font-light">
                <small className="text-gray-800 ">
                  <span className="text-gray-400">createdAt:</span>{" "}
                  {task.createdAt?.slice(0, 10)}
                </small>
              </div>
              <div className="flex gap-2.5">
                <Modal
                  id={task._id}
                  name={<CiEdit />}
                  component={<UpdateTask id={task._id} />}
                />
                <button
                  type="button"
                  id={task._id}
                  className="btn bg-red-500 btn-sm text-white"
                  onClick={() => {
                    deleteTask(task._id);
                  }}
                >
                  <MdOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
