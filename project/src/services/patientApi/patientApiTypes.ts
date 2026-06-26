export interface AppointmentRequest{
  scheduledFor:string,
  reason:string,
  clinicianId:string
}

export interface reScheduleRequest{
  id:string
  scheduledFor:string
}

export interface IntakeRequest
{   
  answers:{
        additionalProp1: string;
        additionalProp2: string;
        additionalProp3: string;
    },
    id:string 
}