import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi=createApi({
  reducerPath:"api",
  baseQuery:fetchBaseQuery({
    baseUrl:"https://xhkrpfff-7000.inc1.devtunnels.ms/",
    prepareHeaders:(headers)=>{
      const token=localStorage.getItem("access_token")
      if(token){
        headers.set("Authorization",`Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes:["Appointment"],
  endpoints:()=>({})
})