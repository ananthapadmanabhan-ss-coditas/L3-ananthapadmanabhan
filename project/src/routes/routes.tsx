import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RouteGuard from "./RouteGuard";
import Layout from "../components/generic_components/Layout/Layout";
import RoleRouter from "./RoleRouter";
import PatientLayout from "../components/patient_components/PatientLayout/PatientLayout";

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
            path:"portal/patient/:id",
            element:<PatientLayout/>,
            children:[
              {
                index:true,
                element:<PatientDashboard/>
              }
            ]
          }
        ]
      }
    ]
  }
])