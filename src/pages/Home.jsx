import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import CreateTask from "../components/CreateTask";
import ShowTask from "../components/ShowTask";
import { useGlobalContext } from "../components/context/Context";
import { useNavigate } from "react-router-dom";
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
