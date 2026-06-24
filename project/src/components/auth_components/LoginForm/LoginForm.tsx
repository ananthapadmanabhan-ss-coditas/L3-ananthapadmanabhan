import { useForm } from "react-hook-form";
import type { LoginType } from "./LoginForm.types";
import styles from "./LoginForm.module.scss"
import Input from "../../generic_components/Input/Input";
import Message from "../../generic_components/Message/Message";
import Button from "../../generic_components/Button/Button";
import { Link } from "react-router-dom";
const LoginForm=()=>{

  const {register,handleSubmit,formState:{errors},getValues} = useForm<LoginType>()

  const onLoginFormSubmit=()=>{
    console.log("successful LOGIN")
  }

  return(
    <form onSubmit={handleSubmit(onLoginFormSubmit)} className={styles.form}>
      <Input type="email" placeholder="Email" label="Email" {...register("email")}/>
      {errors.email && <Message type="Error" message={errors.email.message}/>}
      <Input type="password" placeholder="Password" label="Password" {...register("password")}/>
      {errors.password && <Message type="Error" message={errors.password.message}/>}
      <div>
        <Button type="submit">Sign In</Button>
      </div>
      <div className={styles.Register}>
        <p>First time User? </p>
        {/* <Link to="/register">Sign Up</Link> */}
      </div>
    </form>
  );
}
export default LoginForm