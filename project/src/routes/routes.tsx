import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RouteGuard from "./RouteGuard";
import Layout from "../components/generic_components/Layout/Layout";
import RoleRouter from "./RoleRouter";
import PatientLayout from "../components/patient_components/PatientLayout/PatientLayout";
import PatientDashboard from "../pages/PatientDashboard/PatientDashboard";
import BookAppointment from "../components/patient_components/BookAppointment/BookAppointment";
import RescheduleAppointment from "../components/patient_components/RescheduleAppointment/RescheduleAppointment";
import CancelAppointment from "../components/patient_components/CancelAppointment/CancelAppointment";
import IntakeAppointment from "../components/patient_components/IntakeAppointment/IntakeAppointment";
import UnderDevelopment from "../components/patient_components/UnderDevelopment/UnderDevelopment";

export const routes = createBrowserRouter([
  {
    path: "/signin",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    element: <RouteGuard />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <RoleRouter />,
          },
          {
            element: <RouteGuard allowedRoles={["PATIENT"]}/>,
            children: [
              { 
                path: "portal/patient/:id",
                element: <PatientLayout />,
                children: [
                  {
                    index: true,
                    element: <PatientDashboard />,
                  },
                  {
                    path: "bookappointment",
                    element: <BookAppointment />,
                  },
                  {
                    path: "reschedule/:appointmentID",
                    element: <RescheduleAppointment />,
                  },
                  {
                    path: "cancel/:appointmentID",
                    element: <CancelAppointment />,
                  },
                  {
                    path: "visitsummaries",
                    element: <UnderDevelopment />,
                  },
                  {
                    path: "queue",
                    element: <UnderDevelopment />,
                  },
                  {
                    path: "intake/:appointmentID",
                    element: <IntakeAppointment />,
                  },
                  {
                    path: "assistant",
                    element: <UnderDevelopment />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
