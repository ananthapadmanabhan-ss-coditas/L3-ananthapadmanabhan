
import Loader from "../../components/generic_components/Loader/Loader";
import Message from "../../components/generic_components/Message/Message";
import empty from "../../assets/images.png"
import { useGetAllAppointmentsQuery } from "../../services/patientApi/patientApi";
import styles from "./PatientDashboard.module.scss"

import { useState } from "react";
import Button from "../../components/generic_components/Button/Button";
import AppointmentPage from "../../components/patient_components/AppointmentPage/AppointmentPage";

const PatientDashboard=()=>{

  const [select,setSelect]=useState("BOOKED")

  const {data:Appointments,isLoading,isError}=useGetAllAppointmentsQuery(select)
  console.log(Appointments)
  return(
    <div className={styles.PatientDashboard}>
      <div className={styles.buttonDivs}>
        <Button variant="Fourth" onClick={()=>setSelect("BOOKED")}>BOOKED</Button>
        <Button variant="Fourth" onClick={()=>setSelect("CHECKED_IN")}>CHECKED IN</Button>
        <Button variant="Fourth" onClick={()=>setSelect("CALLED")}>CALLED</Button>
        <Button variant="Fourth" onClick={()=>setSelect("COMPLETED")}>COMPLETED</Button>
        <Button variant="Fourth" onClick={()=>setSelect("IN_VISIT")}>IN VISIT</Button>
        <Button variant="Fourth" onClick={()=>setSelect("CANCELLED")}>CANCELLED</Button>
      </div>     
          { isLoading && <Loader/>}
          { isError && <Message type="Error" message="Error fetching data pleasae try again after some time"/>}
          { 
          Appointments &&
          Appointments.length===0
            ? <div className={styles.emptyImage}><img src={empty}/></div>
            : <AppointmentPage data={Appointments}/>
          }
    </div>
  );
}

export default PatientDashboard