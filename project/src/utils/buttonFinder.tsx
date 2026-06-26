import { useNavigate } from "react-router-dom"
import Button from "../components/generic_components/Button/Button"
 const ButtonFinder=(status:string,id:string)=>{
  console.log("ethi")
    const navigate=useNavigate()
    if(status==="CHECKED_IN"){
      return <Button onClick={()=>navigate(`queue/${id}`)}>VIEW QUEUE</Button>
    }
    if(status==="BOOKED")
      return <Button variant="Tertiary" onClick={()=>navigate(`intake/${id}`)}>CHECK IN</Button>
    else 
      return <></>
  }