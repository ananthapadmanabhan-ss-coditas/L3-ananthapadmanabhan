import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useRescheduleAppointmentMutation, useViewAppointmentQuery } from "../../../services/patientApi/patientApi";
import Modal from "../../generic_components/Modal/Modal";
import Loader from "../../generic_components/Loader/Loader";
import styles from "./RescheduleAppointment.module.scss"
import  { useForm } from "react-hook-form";
import toDATE from "../../../utils/toDATE";
import Label from "../../generic_components/Label/Label";
import Input from "../../generic_components/Input/Input";
import Message from "../../generic_components/Message/Message";
import { useState } from "react";
import type { dateFormat } from "./RescheduleAppointment.types";
import Button from "../../generic_components/Button/Button";

const RescheduleAppointment=()=>{
  const {id,appointmentID}=useParams()
  const {data,isLoading,isError}= useViewAppointmentQuery(appointmentID!)
  const [rescheduleAppointment,rescheduleAppointmentState]=useRescheduleAppointmentMutation()
  // const [date,setDate]=useState("")
  // setDate(toDATE(data.scheduledFor))
  const navigate=useNavigate()
  const {register,formState:{errors},handleSubmit,getValues}=useForm<dateFormat>()
  const onSubmit=async()=>
  {
    try{
      const time=getValues("scheduledFor")
      const updatedTime = new Date(time).toISOString();
      await rescheduleAppointment({scheduledFor:updatedTime,id:appointmentID!})
      navigate(`/portal/patient/${id}`)
    }
    catch(error){
      console.error(error)
    }
  }

  if(isLoading)
    return <Loader/>
  if(isError)
    return <Navigate to={`/portal/patient/${id}`}/>

  return(
    <Modal formTitle="SELECT RESCHEDULE DATE">
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

        {/* <div>
              <Label>Previous Date</Label>
              <Input
                disabled
                type="datetime-local"
                placeholder={""}
                {...register("oldScheduledFor")}
              />

        </div> */}
        <div>
              <Label>Select Updated Date</Label>
              <Input
                type="datetime-local"
                {...register("scheduledFor",{
                  required: "You have to select a date",
                })}
              />
              {errors.scheduledFor && (
                <Message type="Error" message={errors.scheduledFor.message} />
              )}
        </div>

          <div className={styles.btnDiv}>
              <Button type="submit" disabled={rescheduleAppointmentState.isLoading}>
                {rescheduleAppointmentState.isLoading ? "LOADING..." : "BOOK"}
              </Button>
            </div>

      </form>
    </Modal>
  );
}

export default RescheduleAppointment