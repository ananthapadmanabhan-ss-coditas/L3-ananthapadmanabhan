export interface AppointmentRequest{
  scheduledFor:string,
  reason:string,
  clinicianId:string
}

export interface reScheduleRequest{
  id:string
  scheduledFor:string
}
