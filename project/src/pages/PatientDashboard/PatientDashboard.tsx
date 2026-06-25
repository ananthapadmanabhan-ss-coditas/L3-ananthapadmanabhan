import Loader from "../../components/generic_components/Loader/Loader";
import Message from "../../components/generic_components/Message/Message";
import { useGetAllAppointmentsQuery } from "../../services/patientApi/patientApi";
import styles from "./PatientDashboard.module.scss"

const PatientDashboard=()=>{
  const {data:Appointments,isLoading,isError}=useGetAllAppointmentsQuery("IN_VISIT")
  if(isLoading)
    return <Loader/>
  if(isError)
    return <Message type="Error" message="Error fetching data pleasae try again after some time"/>
  if(Appointments.length===0)
    return <Message type="Success" message="NOTHING TO SHOW HERE"/>

  return(
    <div className={styles.PatientDashboard}>
      
    </div>
  );
}

export default PatientDashboard