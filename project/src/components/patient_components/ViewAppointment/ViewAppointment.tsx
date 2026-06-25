import { Navigate, useParams } from "react-router-dom";
import { useViewAppointmentQuery } from "../../../services/patientApi/patientApi";
import Modal from "../../generic_components/Modal/Modal";
import Loader from "../../generic_components/Loader/Loader";

const ViewAppointment=()=>{
  const {id,appointmentID}=useParams()
  const {data,isLoading,isError}= useViewAppointmentQuery(appointmentID ?? "")
  if(isLoading)
    return <Loader/>
  if(isError)
    return <Navigate to={`/portal/patient/${id}`}/>

  return(
    <Modal formTitle="APPOINTMENT DETAILS">
      
    </Modal>
  );
}

export default ViewAppointment