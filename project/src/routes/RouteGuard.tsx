import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/generic_components/Loader/Loader";
import { useGetUserQuery } from "../services/authApi/authApi"


const RouteGuard=({allowedRoles}:{allowedRoles?:string[]})=>{
  console.log("here")
  const {data,isLoading,isError}=useGetUserQuery();
  if(isLoading)
    <Loader/>
  if(!data || isError)
    <Navigate to={"signin"}/>  
  if(allowedRoles && !allowedRoles.includes(data.role)){
    <Navigate to={"unauthorized"}/>
  }
  return <Outlet/>
}

export default RouteGuard