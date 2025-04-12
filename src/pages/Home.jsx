import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CreateTask from "../components/CreateTask";
import ShowTask from "../components/ShowTask";
import { useGlobalContext } from "../components/context/Context";
const Home = () => {
  const { loading } = useGlobalContext();

  return (
    <div>
      <Navbar />
      <CreateTask />
      <ShowTask />
    </div>
  );
};

export default Home;
