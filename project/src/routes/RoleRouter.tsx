import { Navigate } from "react-router-dom";
import { useGetUserQuery } from "../services/authApi/authApi"
import Loader from "../components/generic_components/Loader/Loader";

const RoleRouter=()=>{
  const {data,isLoading}=useGetUserQuery();
  console.log("evide ethi role")
  if(isLoading)
    return <Loader/>
  if(!data)
    return <Navigate to={"signin"} replace/>
  if(data.role==="PATIENT")
    return <Navigate to={`portal/patient/${data.id}`}/>
  if(data.role==="CLINICIAN")
    return <Navigate to={`portal/patient/${data.id}`}/>
  if(data.role==="COORDINATOR")
    return <Navigate to={`portal/patient/${data.id}`}/>
}

export default RoleRouter