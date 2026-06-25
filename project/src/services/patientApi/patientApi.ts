import { baseApi } from "../baseAPI";
import type { AppointmentRequest, reScheduleRequest } from "./patientApiTypes";

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
    rescheduleAppointment:builder.mutation<any,reScheduleRequest>({
      query:({scheduledFor,id}) => ({
        url:`appointments/${id}/reschedule`,
        method:"POST",
        body:{scheduledFor}
      }),
      invalidatesTags:["Appointment"]
    }),
    cancelAppointment:builder.mutation<any,string>({
      query:(id) => ({
        url:`appointments/${id}/cancel`,
        method:"POST",
      }),
      invalidatesTags:["Appointment"]
    }),
  })
})

export const {useBookAppointmentMutation,useGetAllAppointmentsQuery,useViewAppointmentQuery,useRescheduleAppointmentMutation,useCancelAppointmentMutation}=patientApi