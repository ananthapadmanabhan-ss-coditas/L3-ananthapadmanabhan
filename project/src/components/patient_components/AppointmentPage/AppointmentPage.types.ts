import type { ClinicianResponse } from "../../../services/authApi/authApiTypes"

export interface Patient{
  id:string

}
export interface state{
  clinician:ClinicianResponse
  id:string
  intake:any
}

export interface APprops{
  data:state[]
}