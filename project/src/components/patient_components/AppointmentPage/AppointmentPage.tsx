import type { APprops } from "./AppointmentPage.types";
import styles from "./AppointmentPage.module.scss";
import Card from "../../generic_components/Card/Card";
import Button from "../../generic_components/Button/Button";
import toDATE from "../../../utils/toDATE";
import { useNavigate, useParams} from "react-router-dom";
import { useCheckInMutation } from "../../../services/patientApi/patientApi";

const AppointmentPage = ({ data }: APprops) => {
  const navigate=useNavigate()
  const {id}=useParams()
  const [checkIn,checkInState]=useCheckInMutation()
  if (!data) return null;

  const handleRescheduleClick=(appointmentID:string)=>{
    navigate(`reschedule/${appointmentID}`)
  }

  const handleCancelClick=(appointmentID:string)=>{
    navigate(`cancel/${appointmentID}`)
  }

  const handleCheckIn=async(appointmentID:string)=>{
    try {
      checkIn(appointmentID)
    } catch (error) {
      console.log(error);
    }
  }

  const ButtonFinder=(status:string,appointment:string)=>{
    if(status==="CHECKED_IN")
      return <Button onClick={()=>navigate(`queue/${appointment}`)}>VIEW QUEUE</Button>
    if(status==="BOOKED")
      return <Button variant="Tertiary" onClick={()=>handleCheckIn(appointment)}>CHECK IN</Button>
    else 
      return <></>
  }

  return (
    <div className={styles.AppointmentPage}>
      {data.map((appointment) => (
        <Card key={appointment.id}>
          <div className={styles.Doctor}>
            <h1>{appointment.clinician.name}</h1>
          </div>
          <div className={styles.Others}>
            <h3>REASON</h3>
            <p>{appointment.reason}</p>
          </div>
          <div className={styles.Others}>
            <h3>SCHEDULE</h3>
            <p>{toDATE(appointment.scheduledFor)}</p>
          </div>
          <div className={styles.utilBtns}>
             {
              appointment.status!=="CANCELLED" ? <Button variant="Primary" onClick={()=>handleRescheduleClick(appointment.id)}>RESCHEDULE</Button> : <p>appointment was cancelled</p>
            }
            {
              appointment.status!=="CANCELLED" && <Button variant="Secondary" onClick={()=>handleCancelClick(appointment.id)}>CANCEL</Button>
            }
          </div>
          <div>
            {appointment.intake ? 
              ButtonFinder(appointment.status,appointment.id) : (
                appointment.status==="CANCELLED" ? <></> :
              <Button variant="Tertiary" onClick={()=>navigate(`intake/${appointment.id}`)}>INTAKE</Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
export default AppointmentPage;
