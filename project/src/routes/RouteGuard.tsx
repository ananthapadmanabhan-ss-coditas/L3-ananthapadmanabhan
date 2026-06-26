import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/generic_components/Loader/Loader";
import { useGetUserQuery } from "../services/authApi/authApi"

// export enum ROLE{
//   PATIENT="PATIENT",  
//   CLINICIAN="CLINICIAN",
//   COORDINATOR="COORDINATOR"
// }

type ROLE="PATIENT"|"CLINICIAN"|"COORDINATOR"

const RouteGuard=({allowedRoles}:{allowedRoles?:ROLE[]})=>{
  
  const {data,isLoading,isError}=useGetUserQuery();
  if(isLoading)
    return <Loader/>
 
  if(!data || isError)
    return <Navigate to={"signin"} replace/>  

  if(allowedRoles && !allowedRoles.includes(data.role)){
    return <Navigate to={"unauthorized"} replace/>
  }
  return <Outlet/>
}

export default RouteGuard