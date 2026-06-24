import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RouteGuard from "./RouteGuard";

export const routes=createBrowserRouter([
  {
    path:"/signin",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Register/>
  },
  {
    element:<RouteGuard/>,
    children:[
      {
        path:"/",
        element:<Layout/>,
        children:
        [
          {
            index:true,
            element:<RoleRouter/>
          },
          {
            
          }
        ]
      }
    ]
  }
])