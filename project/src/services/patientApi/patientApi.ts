import { baseApi } from "../baseAPI";
import type { AppointmentRequest } from "./patientApiTypes";

export const patientApi=baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointments: builder.query<any,string>({
      query:(status) => ({
        url:`appointments?status=${status}`,
        method:"GET",
      }),
      providesTags:["Appointment"]
    }),
    bookAppointment: builder.mutation<any,AppointmentRequest>({
      query:(body) => ({
        url:"/appointments",
        method:"POST",
        body
      }),
      invalidatesTags:["Appointment"]
    }),
    viewAppointment:builder.query<any,string>({
      query:(id) => ({
        url:`appointments/${id}`,
        method:"GET",
      })
    }),
  })
})

export const {useBookAppointmentMutation,useGetAllAppointmentsQuery,useViewAppointmentQuery}=patientApi