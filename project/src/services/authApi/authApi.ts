import { baseApi } from "../baseAPI";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./authApiTypes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
    }),
    getUser: builder.query<any,void>({
      query:()=>({
        url:"auth/me",
        method:"GET",
      })
    }),
    logoutUser: builder.mutation<any,{refreshToken:string}>({
      query:(body)=>(
        {
          url:"auth/logout",
          method:"POST",
          body
        }
      )
    })
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation,useGetUserQuery,useLogoutUserMutation } = authApi;
