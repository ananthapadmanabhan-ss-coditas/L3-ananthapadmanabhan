import { useForm } from "react-hook-form";
import styles from "./RegisterForm.module.scss";
import Input from "../../generic_components/Input/Input";
import Message from "../../generic_components/Message/Message";
import Button from "../../generic_components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../../services/authApi/authApi";
import type { RegisterType } from "./RegisterForm.types";

const RegisterForm = () => {
  const [registerUser, registerState] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>();
  const navigate = useNavigate();

  const onRegisterFormSubmit = async (data: RegisterType) => {
    try {
      const response = await registerUser(data).unwrap();
      localStorage.setItem("access_token", response.accessToken);
      localStorage.setItem("refresh_token", response.refreshToken);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onRegisterFormSubmit)} className={styles.form}>
      <Input
        type="name"
        placeholder="Name"
        label="Name"
        {...register("name", {
          required: "Name field cannot be empty",
        })}
      />
      {errors.name && <Message type="Error" message={errors.name.message} />}

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
          minLength: {
            value: 8,
            message: "password must contain at least 8 character(s)",
          },
        })}
      />
      {errors.password && (
        <Message type="Error" message={errors.password.message} />
      )}

      <div>
        <Button type="submit" disabled={registerState.isLoading}>
          {registerState.isLoading ? "LOADING..." : "SIGN IN"}
        </Button>
      </div>

      <div className={styles.Register}>
        <p>
          Already Registered? <Link to="/signin">Sign In</Link>
        </p>
      </div>

      <div>
        {registerState.isError && (
          <Message type="Error" message="Request Failed" />
        )}
      </div>
    </form>
  );
};
export default RegisterForm;
