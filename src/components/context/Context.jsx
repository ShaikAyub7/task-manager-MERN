import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const context = createContext();

const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const login = async ({ email, password }) => {
    try {
      const data = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const token = data.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const data = await axios.post(
        "http://localhost:5000/register",
        { name, email, password },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTasks = async () => {
    try {
      const data = await axios.get("http://localhost:5000/api/task/", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setData(data.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  const createTask = async ({ title, description }) => {
    try {
      const data = await axios.post(
        "http://localhost:5000/api/task/createtask",
        { title, description },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async ({ description, status, id }) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/task/update/${id}`,
        { description, status },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData((prevData) =>
        prevData.map((task) =>
          task._id === id ? { ...task, description, status } : task
        )
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/task/delete/${id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <context.Provider
      value={{
        login,
        register,
        createTask,
        data,
        getTasks,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useGlobalContext = () => useContext(context);
export default AppContext;
