import { Navigate, useParams } from "react-router-dom";
import styles from "./BookAppointment.module.scss"
import { useForm } from "react-hook-form";
import Modal from "../../../generic_components/Modal/Modal";
import type { AppointmentRequest } from "../../../../services/patientApi/patientApiTypes";
import Input from "../../../generic_components/Input/Input";
import Select from "../../../generic_components/Select/Select";
import Label from "../../../generic_components/Label/Label";
import Button from "../../../generic_components/Button/Button";
import { useGetCliniciansQuery } from "../../../../services/authApi/authApi";
import Loader from "../../../generic_components/Loader/Loader";
import Message from "../../../generic_components/Message/Message";

const BookAppointment=()=>{

  const {data:Doctors,isLoading,isError} =useGetCliniciansQuery()

  if(isLoading)
    return <Loader/>
  if(isError)
    return <Message type="Error" message="Error fetching the form"/> 

  const {register,handleSubmit,formState:{errors},getValues}=useForm<AppointmentRequest>()
  
  const onBookAppointment=(data:AppointmentRequest)=>{

  }

  return(
    <Modal formTitle="BOOK AN APPOINTMENT">
      <form className={styles.bookappointment} onSubmit={handleSubmit(onBookAppointment)}>

        <div>
          <Label>SELECT DATE</Label>
          <Input type="date"{...register("scheduledFor")}/>
        </div>   

        <div>
          <Input placeholder="Reason" label="Reason" {...register("reason")}/>
        </div>

        <div>
          <Label>CHOOSE DOCTOR</Label>
           
          <Select {...register("clinicianId")}>
          {
            Doctors?.map((Doctor)=>
              <Select.Option/>
            )
          }
          </Select>
        </div>

        <div className={styles.btnDiv}>
          <Button type="submit">BOOK</Button>
        </div>

      </form>
    </Modal>
  );
}

export default BookAppointment