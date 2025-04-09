import React, { useMemo, useState } from "react";
import { useGlobalContext } from "./context/Context";

import TodoTasks from "./TodoTasks";
import InprogressTasks from "./InprogressTask";
import CompletedTasks from "./CompletedTasks";
import AllTasks from "./AllTasks";

const ShowTask = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = useGlobalContext();
  const tabs = [
    {
      name: "All Tasks",
      content: <AllTasks />,
    },
    {
      name: "Todo Tasks",
      content: <TodoTasks />,
    },
    {
      name: "Inprogress Tasks",
      content: <InprogressTasks />,
    },
    {
      name: "completed Tasks",
      content: <CompletedTasks />,
    },
  ];

  return (
    <section className="">
      <div className="flex space-x-1.5 lg:space-x-4 cursor-pointer">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 border-b-2 font-bold cursor-pointer ${
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
