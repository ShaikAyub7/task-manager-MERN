import React, { useMemo, useState } from "react";
import { useGlobalContext } from "./context/Context";
import { FcTodoList } from "react-icons/fc";
import { TiTick } from "react-icons/ti";

import { GrInProgress } from "react-icons/gr";
import TodoTasks from "./TodoTasks";
import InprogressTasks from "./InprogressTask";
import CompletedTasks from "./CompletedTasks";
import AllTasks from "./AllTasks";

const ShowTask = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    <section className="p-4  rounded-lg ">
      <div className="flex space-x-1.5 lg:space-x-4 cursor-pointer sticky top-0 z-100 bg-white p-2 shadow-md justify-center rounded-2xl">
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
          <div className="mt-1">{tabs[activeTab].content}</div>
        </div>
      </>
    </section>
  );
};

export default ShowTask;
