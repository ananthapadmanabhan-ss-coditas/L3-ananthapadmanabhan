import { Outlet, useParams } from "react-router-dom";
import SideBar from "../../generic_components/SideBar/SideBar";
import styles from './PatientLayout.module.scss'

const PatientLayout=()=>{
  const {id}=useParams()
  return(
    <div className={styles.layout}>
      <SideBar id={id ?? ""} options={["Book Appointment","Visit Summaries","Queue","Assistant"]}/>
      <Outlet/>
    </div>
  );
}

export default PatientLayout