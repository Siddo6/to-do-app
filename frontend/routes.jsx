import { createBrowserRouter } from "react-router"
import LogIn from "./src/components/pages/login/login"
import SignUp from "./src/components/pages/signup/signup"
import Tasks from "./src/components/pages/tasks/tasks"
import Error404 from "./src/components/pages/404/404"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn/>
  },
  {
    path: "signup",

    element:
     <SignUp/>
   },
   {
 path: "login",

    element:
     <LogIn/>
   },
  {
    path:"tasks",
    element: <Tasks/>
  },
  {
    path: "*",
    element: <Error404/>
  }



])
