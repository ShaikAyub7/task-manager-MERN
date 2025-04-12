import React from "react";

const Error = () => {
  return (
    <div className="grid place-items-center p-12 mt-4">
      {/* <div className="grid place-items-center p-12 mt-4">
        <span className="loading loading-bars loading-sm"></span>
      </div> */}
      <div className="text-center mt-4">
        <img src="./no-task.png" alt="" className="w-45 mt-3.5 ml-10" />
        <h2 className="text-lg font-semibold mt-5">No tasks available</h2>
        {/* <p className="text-gray-500">Please create a new task.</p> */}
      </div>
    </div>
  );
};

export default Error;
