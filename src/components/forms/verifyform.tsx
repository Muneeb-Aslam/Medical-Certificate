import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../ui/formerror";
import FormDiv from "../ui/formdiv";
import { FormLabel } from "../ui/formlabel";
import Input from "../ui/input";
import Button from "../ui/button";
import { verifySchema } from "../../schema/login.schema";
// import CheckBox from "../ui/checkbox";

type FormData = z.infer<typeof verifySchema>;

const VerifyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center gap-6 font-poppins pb-20 px-4 md:px-12"
    >
      <h3 className="text-green font-bold text-4xl">Verify Certificate</h3>

      <FormDiv>
        <FormLabel aria-required={true}>Certificate Number</FormLabel>
        <Input {...register("certificateID")} placeholder="Certificate #" />
        <FormError error={errors.certificateID} />
      </FormDiv>

      <Button type="submit" className="self-center">
        Verify
      </Button>
    </form>
  );
};

export default VerifyForm;
