import { baseApi } from "../baseAPI";
import type { AppointmentRequest } from "./patientApiTypes";

export const patientApi=baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bookAppointment: builder.mutation<any,AppointmentRequest>({
      query:(body) => ({
        url:"/appointments",
        method:"POST",
        body
      })
    }),
    getAllAppointments: builder.query<any,string>({
      query:(status) => ({
        url:`appointments?status=${status}`,
        method:"GET"
      })
    })
  })
})

export const {useBookAppointmentMutation,useGetAllAppointmentsQuery}=patientApi