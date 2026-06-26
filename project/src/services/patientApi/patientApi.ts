import { baseApi } from "../baseAPI";
import type { AppointmentRequest, IntakeRequest, reScheduleRequest } from "./patientApiTypes";

export const patientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAppointments: builder.query<any, string>({
      query: (status) => ({
        url: `appointments?status=${status}`,
        method: "GET",
      }),
      providesTags: ["Appointment"],
    }),
    bookAppointment: builder.mutation<any, AppointmentRequest>({
      query: (body) => ({
        url: "/appointments",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Appointment"],
    }),
    viewAppointment: builder.query<any, string>({
      query: (id) => ({
        url: `appointments/${id}`,
        method: "GET",
      }),
    }),
    rescheduleAppointment: builder.mutation<any, reScheduleRequest>({
      query: ({ scheduledFor, id }) => ({
        url: `appointments/${id}/reschedule`,
        method: "POST",
        body: { scheduledFor },
      }),
      invalidatesTags: ["Appointment"],
    }),
    cancelAppointment: builder.mutation<any, string>({
      query: (id) => ({
        url: `appointments/${id}/cancel`,
        method: "POST",
      }),
      invalidatesTags: ["Appointment"],
    }),
    
    submitIntake: builder.mutation<any,IntakeRequest>({
      query: ({answers,id}) => ({
        url: `/appointments/${id}/intake`,
        method: "POST",
        body:{answers},
      }),
      invalidatesTags: ["Appointment"]
    }),

    uploadDocument: builder.mutation<void, FormData>({
        query: (formData) => ({
            url: `/upload/${Math.random()}`,
            method: "PUT",
            body: formData,
        }),
    }),

    // getDocuments: builder.query<any[], void>({
    //     query: () => ({
    //         url: "/appointments/documents",
    //         method: "GET",
    //     }),
    //     providesTags: ["Appointment"],
    // }),

    // getQueue: builder.query<any, void>({
    //     query: () => ({
    //         url: "/appointments/queue",
    //         method: "GET",
    //     }),
    //     providesTags: ["Appointment"],
    // }),

    checkIn: builder.mutation<any, string>({
          query: (appointmentId) => ({
            url: `appointments/${appointmentId}/check-in`,
            method: "POST",
          }),
          invalidatesTags: ["Appointment"]
    }),

    //   callPatient: builder.mutation<any, string>({
    //     query: (appointmentId) => ({
    //       url: `appointments/${appointmentId}/call`,
    //       method: "POST",
    //     }),
    //   }),

    //   startAppointment: builder.mutation<any, string>({
    //     query: (appointmentId) => ({
    //       url: `appointments/${appointmentId}/start`,
    //       method: "POST",
    //     }),
    //   }),

    //   completeAppointment: builder.mutation<any, string>({
    //     query: (appointmentId) => ({
    //       url: `appointments/${appointmentId}/complete`,
    //       method: "POST",
    //     }),
    //   }),
      getQueue: builder.query<any, string>({
        query: (appointmentId) => ({
            url: `/appointments/${appointmentId}/queue`,
            method: "GET",
        }),
        providesTags: ["Appointment"],
    }),
  }),
});

export const {
  useBookAppointmentMutation,
  useGetAllAppointmentsQuery,
  useViewAppointmentQuery,
  useRescheduleAppointmentMutation,
  useCancelAppointmentMutation,
  useSubmitIntakeMutation,
  useUploadDocumentMutation,
  useCheckInMutation
} = patientApi;
