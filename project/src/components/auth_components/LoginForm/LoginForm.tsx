import { useForm } from "react-hook-form";
import type { LoginType } from "./LoginForm.types";
import styles from "./LoginForm.module.scss";
import Input from "../../generic_components/Input/Input";
import Message from "../../generic_components/Message/Message";
import Button from "../../generic_components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../services/authApi/authApi";

const LoginForm = () => {
  const [loginUser, loginState] = useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginType>();
  const navigate = useNavigate();

  const onLoginFormSubmit = async () => {
    try {
      const email = getValues("email");
      const password = getValues("password");
      const data = await loginUser({ email, password }).unwrap();
      localStorage.setItem("access_token", data.accessToken);
      localStorage.setItem("refresh_token", data.refreshToken);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onLoginFormSubmit)} className={styles.form}>
      <Input
        type="email"
        placeholder="Email"
        label="Email"
        {...register("email", {
          required: "Email Field Cannot be empty",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address format",
          },
        })}
      />
      {errors.email && <Message type="Error" message={errors.email.message} />}

      <Input
        type="password"
        placeholder="Password"
        label="Password"
        {...register("password", {
          required: "Password field cannot be empty",
        })}
      />
      {errors.password && (
        <Message type="Error" message={errors.password.message} />
      )}

      <div>
        <Button type="submit" disabled={loginState.isLoading}>
          {loginState.isLoading ? "LOADING..." : "SIGN IN"}
        </Button>
      </div>

      <div className={styles.Register}>
        <p>
          First time User? <Link to="/signup">Sign Up</Link>
        </p>
      </div>

      <div>
        {loginState.isError && (
          <Message type="Error" message="Request Failed" />
        )}
      </div>
    </form>
  );
};
export default LoginForm;
