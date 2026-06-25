import { Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "./BookAppointment.module.scss";
import { useForm } from "react-hook-form";
import type { AppointmentRequest } from "../../../services/patientApi/patientApiTypes";
import { useGetCliniciansQuery } from "../../../services/authApi/authApi";
import { useBookAppointmentMutation } from "../../../services/patientApi/patientApi";
import Loader from "../../generic_components/Loader/Loader";
import Message from "../../generic_components/Message/Message";
import Button from "../../generic_components/Button/Button";
import Modal from "../../generic_components/Modal/Modal";
import Label from "../../generic_components/Label/Label";
import Input from "../../generic_components/Input/Input";
import Select from "../../generic_components/Select/Select";
import type { ClinicianResponse } from "../../../services/authApi/authApiTypes";


const BookAppointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<AppointmentRequest>();
  const { data: Doctors, isLoading, isError } = useGetCliniciansQuery();
  const [bookAppointment, bookAppointmentState] = useBookAppointmentMutation();
  const { id } = useParams();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  if (isError)
    return <Message type="Error" message="Error fetching the form" />;

  const onBookAppointment = async (data: AppointmentRequest) => {
    try {
      const time = getValues("scheduledFor");
      const updatedTime = new Date(time).toISOString();
      await bookAppointment({ ...data, scheduledFor: updatedTime });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {bookAppointmentState.isSuccess ? (
        <div className={styles.SUCCESSFUL}>
          <h1>BOOKING SUCCESSFUL</h1>
          <Button
            variant="Primary"
            onClick={() => navigate(`/portal/patient/${id}`)}
          >
            GO BACK TO DASHBOARD
          </Button>
        </div>
      ) : (
        <Modal formTitle="BOOK AN APPOINTMENT">
          <form
            className={styles.bookappointment}
            onSubmit={handleSubmit(onBookAppointment)}
          >
            <div>
              <Label>SELECT DATE</Label>
              <Input
                type="datetime-local"
                {...register("scheduledFor", {
                  required: "You have to select a date",
                })}
              />
              {errors.scheduledFor && (
                <Message type="Error" message={errors.scheduledFor.message} />
              )}
            </div>

            <div>
              <Input
                placeholder="Reason"
                label="Reason"
                {...register("reason", {
                  required: "This field cannot be empty",
                })}
              />
              {errors.reason && (
                <Message type="Error" message={errors.reason.message} />
              )}
            </div>

            <div>
              <Label>CHOOSE DOCTOR</Label>

              <Select
                {...register("clinicianId", {
                  required: "This field cannot be empty",
                })}
              >
                {Doctors?.map((Doctor: ClinicianResponse) => (
                  <Select.Option id={Doctor.id} value={`${Doctor.id}`}>
                    {Doctor.name}
                  </Select.Option>
                ))}
              </Select>
              {errors.clinicianId && (
                <Message type="Error" message={errors.clinicianId.message} />
              )}
            </div>

            <div className={styles.btnDiv}>
              <Button type="submit" disabled={bookAppointmentState.isLoading}>
                {bookAppointmentState.isLoading ? "LOADING..." : "BOOK"}
              </Button>
            </div>

            {bookAppointmentState.isError && (
              <Message type="Error" message="Request Failed" />
            )}
          </form>
        </Modal>
      )}
    </div>
  );
};

export default BookAppointment;
