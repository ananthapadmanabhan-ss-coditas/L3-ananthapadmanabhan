import { Outlet } from "react-router-dom";
import SideBar from "../../generic_components/SideBar/SideBar";
import styles from './PatientLayout.module.scss'

const PatientLayout=()=>{
  return(
    <div className={styles.layout}>
      <SideBar options={["Book Appointment","Visit Summaries","Queue","Assistant"]}/>
      <Outlet/>
    </div>
  );
}

export default PatientLayout