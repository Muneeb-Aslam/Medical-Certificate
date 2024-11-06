import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../ui/formerror";
import FormDiv from "../ui/formdiv";
import { FormLabel } from "../ui/formlabel";
import Input from "../ui/input";
import Button from "../ui/button";
import { loginSchema } from "../../schema/login.schema";
import { useNavigate } from "react-router-dom";
// import CheckBox from "../ui/checkbox";

type FormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-6 font-poppins pb-20 px-4 md:px-12"
    >
      <h3 className="text-green font-bold text-4xl">Login Form</h3>

      <FormDiv>
        <FormLabel aria-required={true}>Email</FormLabel>
        <Input {...register("email")} placeholder="Email" />
        <FormError error={errors.email} />
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>Password</FormLabel>
        <Input {...register("password")} placeholder="password" />
        <FormError error={errors.password} />
      </FormDiv>

      <FormLabel
        onClick={() => navigate("/register")}
        className="self-end cursor-pointer"
      >
        Create new account
      </FormLabel>
      <Button type="submit" className="self-center">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
