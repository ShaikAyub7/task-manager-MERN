import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const context = createContext();
const url = ` https://task-manager-mern-rmn3.onrender.com`;

const AppContext = ({ children }) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  let decoded = null;
  if (token && token !== "null") {
    decoded = jwtDecode(token);
  }

  const login = async ({ email, password }) => {
    try {
      const data = await axios.post(
        `${url}/login`,
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
      toast.success(data.data.message);
      localStorage.setItem("token", token);
      toast.success("Login successful!");

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const data = await axios.post(
        `${url}/register`,
        { name, email, password },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      toast.success("Registration successful!");
      console.log(data);
      toast.success(data.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logout successful!");
  };

  const getTasks = async () => {
    try {
      const data = await axios.get(`${url}/api/task/`, {
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
    setLoading(true);
    if (token) {
      getTasks();
      setUser(decoded);
      setLoading(false);
    }
  }, [token]);

  const createTask = async ({ title, description }) => {
    try {
      const data = await axios.post(
        `${url}/api/task/createtask`,
        { title, description },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getTasks();
      toast.success("Task created successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async ({ description, status, id }) => {
    try {
      const response = await axios.patch(
        `${url}/api/task/update/${id}`,
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
      toast.success("Task updated successfully!");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const task = data.find((task) => task._id === id);

      if (task?.status === "completed") {
        toast.error("Cannot delete a completed task!");
        return;
      }

      const response = await axios.delete(`${url}/api/task/delete/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Task deleted successfully!", id);
      getTasks();
    } catch (error) {
      console.log(error);
      toast.error("Error deleting task.");
    }
  };

  const todoTasks = useMemo(
    () => data?.filter((task) => task.status === "todo"),
    [data]
  );
  const inprogressTasks = useMemo(
    () => data?.filter((task) => task.status === "inprogress"),
    [data]
  );
  const completedTasks = useMemo(
    () => data?.filter((task) => task.status === "completed"),
    [data]
  );

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
        todoTasks,
        inprogressTasks,
        completedTasks,
        user,
        token,
        handleLogout,
        decoded,
        searchTerm,
        loading,
        setSearchTerm,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useGlobalContext = () => useContext(context);
export default AppContext;
