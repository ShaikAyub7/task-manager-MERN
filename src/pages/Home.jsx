import React from "react";
import Navbar from "../components/Navbar";
import CreateTask from "../components/CreateTask";
import ShowTask from "../components/ShowTask";
const Home = () => {
  return (
    <div>
      <Navbar />
      <CreateTask />
      <ShowTask />
    </div>
  );
};

export default Home;
