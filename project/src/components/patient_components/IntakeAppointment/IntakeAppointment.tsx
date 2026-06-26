import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useSubmitIntakeMutation,
  useUploadDocumentMutation,
} from "../../../services/patientApi/patientApi";
import Modal from "../../generic_components/Modal/Modal";
import Input from "../../generic_components/Input/Input";
import TextArea from "../../generic_components/TextArea/TextArea";
import Button from "../../generic_components/Button/Button";
import styles from "./IntakeAppointment.module.scss";
import { useForm } from "react-hook-form";
import type { IntakeForm, UploadData } from "./IntakeAppointment.types";
import Message from "../../generic_components/Message/Message";
// import FileInput from "../../generic_components/FileInput/FileInput";
const IntakeAppointment = () => {
  const navigate = useNavigate();
  const { id, appointmentID } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IntakeForm>();
  // const {
  //   register: upload,
  //   handleSubmit: handleUpload,
  //   formState: { errors: uploadError },
  // } = useForm<UploadData>();

  const [submitIntake, submitIntakeState] = useSubmitIntakeMutation();
  // const [uploadDocument, uploadDocumentState] = useUploadDocumentMutation();

  const onIntakeFormSubmit = async (data: IntakeForm) => {
    try {
      const answer = { answers: data!, id: appointmentID! };
      console.log(answer);
      await submitIntake(answer);
      // navigate(`portal/patient/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // const onUploadsSubmit = async (data: UploadData) => {
  //   try {
  //     var form = new FormData();
  //     form.append("file", data.file[0]);
  //     await uploadDocument(form);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onUploadFormSubmit = async () => {
  //   navigate(`portal/patient/${id}`);
  // };

  return (
    <div>
      {submitIntakeState.isSuccess ? (
        <div className={styles.SUCCESSFUL}>
          <h1>INTAKE SUCCESSFUL</h1>
          <Button
            variant="Primary"
            onClick={() => navigate(`/`)}
          >
            GO BACK TO DASHBOARD
          </Button>
        </div>
      ) : (
        <Modal formTitle="INTAKE DETAILS">
          <form
            className={styles.form}
            onSubmit={handleSubmit(onIntakeFormSubmit)}
          >
            <h4>Personal Details</h4>
            <Input
              label="Answer 1"
              placeholder="Answer 1"
              {...register("additionalProp1", {
                required: "Field Cannot be empty",
              })}
              disabled={submitIntakeState.isSuccess}
            />
            {errors.additionalProp1 && (
              <Message type="Error" message={errors.additionalProp1.message} />
            )}

            <Input
              label="Answer 2"
              placeholder="Answer 2"
              {...register("additionalProp2", {
                required: "Field Cannot be empty",
              })}
              disabled={submitIntakeState.isSuccess}
            />
            {errors.additionalProp2 && (
              <Message type="Error" message={errors.additionalProp2.message} />
            )}

            <TextArea
              rows={4}
              label="Answer 3"
              placeholder="Answer 3"
              {...register("additionalProp3", {
                required: "Field Cannot be empty",
              })}
              disabled={submitIntakeState.isSuccess}
            />
            {errors.additionalProp3 && (
              <Message type="Error" message={errors.additionalProp3.message} />
            )}

            <div>
              <Button
                type="submit"
                disabled={
                  submitIntakeState.isLoading || submitIntakeState.isSuccess
                }
              >
                {submitIntakeState.isLoading ? "LOADING..." : "Submit"}
              </Button>
            </div>

            <div>
              {submitIntakeState.isError && (
                <Message type="Error" message="Request Failed" />
              )}
            </div>
          </form>
          {/* <h4>Uploads</h4>
        <form
          onSubmit={handleUpload(onUploadsSubmit)}
          className={styles.uploadFormStyle}
        >
          <FileInput
            label="INSURANCE"
            {...upload("file", {
              required: "Field Cannot be empty",
            })}
          />
          <Button disabled={uploadDocumentState.isSuccess}>
          SUBMIT
          </Button> */}
          {/* <div>
            <Button
            type="submit"
            disabled={
              uploadDocumentState.isLoading || uploadDocumentState.isSuccess
            }
          >
            Upload
          </Button>
          </div>
          {uploadError.file && (
            <Message type="Error" message={uploadError.file.message} />
          )} */}
          {/* </form> */}
        </Modal>
      )}
    </div>
  );
};

export default IntakeAppointment;
