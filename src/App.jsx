import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppContext from "./components/context/Context";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <AppContext>
      <ToastContainer position="top-center" autoClose={2000} />
      <RouterProvider router={router} />
    </AppContext>
  );
}

export default App;
