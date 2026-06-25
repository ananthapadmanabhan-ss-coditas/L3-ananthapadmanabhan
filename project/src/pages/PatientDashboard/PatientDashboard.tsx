
import Loader from "../../components/generic_components/Loader/Loader";
import Message from "../../components/generic_components/Message/Message";

import { useGetAllAppointmentsQuery } from "../../services/patientApi/patientApi";
import styles from "./PatientDashboard.module.scss"

import { useState } from "react";
import Button from "../../components/generic_components/Button/Button";

const PatientDashboard=()=>{

  const [select,setSelect]=useState("BOOKED")

  const {data:Appointments,isLoading,isError}=useGetAllAppointmentsQuery(select)

  return(
    <div className={styles.PatientDashboard}>
      <div className={styles.buttonDivs}>
        <Button onClick={()=>setSelect("BOOKED")}>BOOKED</Button>
        <Button onClick={()=>setSelect("CHECKED_IN")}>CHECKED IN</Button>
        <Button onClick={()=>setSelect("CALLED")}>CALLED</Button>
        <Button onClick={()=>setSelect("COMPLETED")}>COMPLETED</Button>
        <Button onClick={()=>setSelect("IN_VISIT")}>IN VISIT</Button>
        <Button onClick={()=>setSelect("CANCELLED")}>CANCELLED</Button>
      </div>     
          { isLoading && <Loader/>}
          { isError && <Message type="Error" message="Error fetching data pleasae try again after some time"/>}
          { 
          Appointments?.length===0 
            ? <Message type="Error" message="NOTHING TO SHOW HERE"/>
            : <div className={styles.dataDiv}></div>
          }
    </div>
  );
}

export default PatientDashboard