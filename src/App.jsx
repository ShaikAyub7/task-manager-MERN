import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AppContext from "./components/context/Context";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
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
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </AppContext>
  );
}

export default App;
