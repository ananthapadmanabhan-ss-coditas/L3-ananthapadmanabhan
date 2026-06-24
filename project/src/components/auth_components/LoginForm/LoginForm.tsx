import { useForm } from "react-hook-form";
import type { LoginType } from "./LoginForm.types";
import styles from "./LoginForm.module.scss"
const LoginForm=()=>{

  const {register,handleSubmit,formState:{errors},getValues} = useForm<LoginType>()

  const onLoginFormSubmit=()=>{

  }

  return(
    <form onSubmit={handleSubmit(onLoginFormSubmit)} className={styles.form}>
      
    </form>
  );
}
export default LoginForm