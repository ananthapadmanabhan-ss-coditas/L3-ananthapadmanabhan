import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCancelAppointmentMutation } from "../../../services/patientApi/patientApi";
import Modal from "../../generic_components/Modal/Modal";
import Loader from "../../generic_components/Loader/Loader";
import Button from "../../generic_components/Button/Button";
import styles from "./CancelAppointment.module.scss"

const CancelAppointment=()=>{
  const {id,appointmentID}=useParams()
  const [cancelAppointment,cancelAppointmentState]=useCancelAppointmentMutation()
  // const [date,setDate]=useState("")
  // setDate(toDATE(data.scheduledFor))
  const navigate=useNavigate()
  const onSubmit=async()=>
  {
    try{
      await cancelAppointment(appointmentID!)
      navigate(`/portal/patient/${id}`)
    }
    catch(error){
      console.error(error)
    }
  }

  if(cancelAppointmentState.isLoading)
    return <Loader/>
  if(cancelAppointmentState.isError)
    return <Navigate to={`/portal/patient/${id}`}/>

  return(
    <Modal formTitle="CANCEL APPOINTMENT">
      <form  className={styles.form}>
          <h3>ARE YOU SURE YOU WANT TO CANCEL?</h3>
          <div className={styles.btnDiv}>
              <Button variant="Secondary" onClick={onSubmit}>
                {cancelAppointmentState.isLoading ? "LOADING..." : "CANCEL"}
              </Button>
              <Button onClick={()=>navigate(`/portal/patient/${id}`)}>
                NO, I want to keep it
              </Button>
          </div>
      </form>
    </Modal>
  );
}

export default CancelAppointment