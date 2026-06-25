import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/generic_components/Loader/Loader";
import { useGetUserQuery } from "../services/authApi/authApi"


const RouteGuard=({allowedRoles}:{allowedRoles?:string[]})=>{
  console.log("here")
  const {data,isLoading,isError}=useGetUserQuery();
  if(isLoading)
    return <Loader/>
  console.log("load aayi")
  if(!data || isError)
    return <Navigate to={"signin"} replace/>  
  console.log("error")
  if(allowedRoles && !allowedRoles.includes(data.role)){
    return <Navigate to={"unauthorized"} replace/>
  }
  return <Outlet/>
}

export default RouteGuard