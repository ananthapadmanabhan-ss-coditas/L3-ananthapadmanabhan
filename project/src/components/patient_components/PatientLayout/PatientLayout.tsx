import SideBar from "../../generic_components/SideBar/SideBar";

const PatientLayout=()=>{
  return(
    <div>
      <SideBar options={["Book Appointment","Visit Summaries","Queue","Assistant"]}/>
    </div>
  );
}

export default PatientLayout