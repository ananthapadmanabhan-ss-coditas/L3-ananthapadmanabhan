import type { APprops } from "./AppointmentPage.types";
import styles from "./AppointmentPage.module.scss";
import Card from "../../generic_components/Card/Card";
import Button from "../../generic_components/Button/Button";
import toDATE from "../../../utils/toDATE";
import Message from "../../generic_components/Message/Message";
import { useNavigate } from "react-router-dom";

const AppointmentPage = ({ data }: APprops) => {
  const navigate=useNavigate()
  if (!data) return null;

  const handleRescheduleClick=(appointmentID:string)=>{
    navigate(`reschedule/${appointmentID}`)
  }

  const handleCancelClick=(appointmentID:string)=>{
    navigate(`cancel/${appointmentID}`)
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
            <Button variant="Primary" onClick={()=>handleRescheduleClick(appointment.id)}>RESCHEDULE</Button>
            <Button variant="Secondary" onClick={()=>handleCancelClick(appointment.id)}>CANCEL</Button>
          </div>
          <div>
            {appointment.intake ? (
              <Message type="Success" message="Your Intake is complete" />
            ) : (
              <Button variant="Tertiary">INTAKE</Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
export default AppointmentPage;
