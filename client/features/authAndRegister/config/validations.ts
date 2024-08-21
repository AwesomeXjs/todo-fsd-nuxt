import { object, string } from "yup";

export const useValidate = () => {
  const RegisterSchema = object().shape({
    name: string().required().label("Full name").min(2).max(50),
    email: string().required().label("Email").email(),
    password: string().required().label("Password").min(6).max(50),
  });

  const LoginSchema = object().shape({
    email: string().required("Email is required").label("Email").email(),
    password: string().required("Password is required").label("Password").min(6).max(50),
  });

  const ForgotPasswordSchema = object().shape({
    email: string().required("Email is required").label("Email").email(),
  });
  return {
    RegisterSchema,
    LoginSchema,
    ForgotPasswordSchema,
  };
};
