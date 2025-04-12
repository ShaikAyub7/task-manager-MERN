import React, { useMemo, useState } from "react";
import { useGlobalContext } from "./context/Context";
import TodoTasks from "./TodoTasks";
import InprogressTasks from "./InprogressTask";
import CompletedTasks from "./CompletedTasks";
import AllTasks from "./AllTasks";
import Error from "./Error";

const ShowTask = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { loading, data } = useGlobalContext();
  const tabs = [
    {
      name: "All ",
      content: <AllTasks />,
    },
    {
      name: "Todo ",
      content: <TodoTasks />,
    },
    {
      name: "In Progress",
      content: <InprogressTasks />,
    },
    {
      name: "Completed",
      content: <CompletedTasks />,
    },
  ];

  return (
    <section className=" rounded-lg ">
      <div className="flex space-x-1.5 lg:space-x-4 cursor-pointer sticky top-0 z-100 bg-white p-2 shadow-md justify-center rounded-lg">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 border-b font-medium text-sm cursor-pointer ${
              activeTab === index
                ? "border-white dark:border-b-blue-900"
                : "border-transparent"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <>
        <div className="grid grid-cols-1">
          {data ? (
            <>
              <div className=" p-4 mb-5">{tabs[activeTab].content}</div>
            </>
          ) : (
            <>
              <Error />
            </>
          )}{" "}
        </div>
      </>
    </section>
  );
};

export default ShowTask;
