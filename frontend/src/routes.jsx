import Login from "./components/pages/login/login.jsx";
import PageNotFound from "./components/pages/404/404.jsx";
import Signup from "./components/pages/signup/signup.jsx";
import Tasks from "./components/pages/tasks/tasks.jsx";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "tasks",
    element: <Tasks />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);