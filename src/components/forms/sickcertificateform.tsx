import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormError } from "../ui/formerror";
import { SickLeaveFormSchema } from "../../schema/sickform.schema";
import FormDiv from "../ui/formdiv";
import { FormLabel } from "../ui/formlabel";
import Input from "../ui/input";
import Button from "../ui/button";
// import CheckBox from "../ui/checkbox";

const termsAndConditions =
  "I hereby agree to the Terms and Conditions of MedicalCertificate.in. I agree that MedicalCertificate.in shall not be liable or responsible for the non-issuance of a Medical Certificate by the Registered Medical Practitioner, or for any consequential situations arising after the issuance of the Medical Certificate. I acknowledge and accept that the acceptance or denial of the Medical Certificate for all practical purposes is beyond the liability of MedicalCertificate.in.I understand that MedicalCertificate.in acts solely as a facilitating agency and has no direct role or involvement in the issuance of Medical Certificates. The issuance, duration, and content of a Medical Certificate are determined at the sole discretion of the consulting doctor. I affirm that all information provided about my health condition is truthful, and I confirm under oath that I will not use this certificate for any unethical or medico-legal purposes, such as legal proceedings, insurance claims, regularisation of government jobs, police cases, or matters involving wills and others. In the event of non-issuance or cancellation of the Medical Certificate for any reason, I agree that a convenience charge will apply, based on the Refund and Cancellation Policy for refundable document formats. I understand that no refunds will be issued for non-refundable document formats. I confirm that this online consultation is not a substitute for an in-person doctor's visit or for treatment of any severe health condition. I have read, understood, and consent to the Terms and Conditions, Refund and Cancellation Policy, Terms of Service, and other Terms and Conditions including the use of my information in accordance with the Privacy Policy of MedicalCertificate.in.s";

type FormData = z.infer<typeof SickLeaveFormSchema>;

const SickCertificateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SickLeaveFormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-start items-start gap-12 font-poppins pb-20"
    >
      <FormDiv>
        <FormLabel className="text-black text-lg font-normal break-words leading-8">
          {termsAndConditions}
        </FormLabel>
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" className="w-[20px] h-[20px]" />
          <FormLabel aria-required={true}>
            I accept all the terms and conditions, refund & cancellation policy,
            and the format of the certificate.
          </FormLabel>
        </div>
        {/* <CheckBox
            {...register("termsAndConditions")}
            setTermsCheckedBox={setChecked}
            termsCheckedBox={che}
          /> */}
        <FormError error={errors.phoneNumber} />
      </FormDiv>

      <div className="w-full flex justify-start items-center gap-12">
        <FormDiv>
          <FormLabel aria-required={true}>Frist Name</FormLabel>
          <Input {...register("firstName")} placeholder="First Name" />
          <FormError error={errors.firstName} />
        </FormDiv>

        <FormDiv>
          <FormLabel aria-required={true}>Last Name</FormLabel>
          <Input {...register("lastName")} placeholder="Last Name" />
          <FormError error={errors.lastName} />
        </FormDiv>
      </div>
      <FormDiv>
        <FormLabel aria-required={true}>Email</FormLabel>
        <Input {...register("email")} placeholder="Email" />
        <FormError error={errors.email} />
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>Gender</FormLabel>
        <div className="flex justify-start items-center gap-2">
          <input type="radio" value={"Male"} />
          <label htmlFor="male">Male</label>
        </div>
        <div className="flex justify-start items-center gap-2">
          <input type="radio" value={"Female"} />
          <label htmlFor="Female">Female</label>
        </div>
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>Phone #</FormLabel>
        <Input {...register("phoneNumber")} placeholder="Phone #" />
        <FormError error={errors.phoneNumber} />
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>Care Of</FormLabel>
        <Input
          {...register("careOf")}
          placeholder="Father/ Husband/ Guardian full name"
        />
        <FormError error={errors.careOf} />
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>Address</FormLabel>
        <Input {...register("FullAddress.address")} placeholder="Address" />
        <FormError error={errors.FullAddress?.address} />
      </FormDiv>

      <div className="w-full flex justify-start items-center gap-12">
        <FormDiv>
          <FormLabel aria-required={true}>City</FormLabel>
          <Input {...register("FullAddress.city")} placeholder="City" />
          <FormError error={errors.FullAddress?.city} />
        </FormDiv>

        <FormDiv>
          <FormLabel aria-required={true}>State</FormLabel>
          <Input {...register("FullAddress.state")} placeholder="State" />
          <FormError error={errors.FullAddress?.state} />
        </FormDiv>
      </div>

      <div className="w-full flex justify-start items-center gap-12">
        <FormDiv>
          <FormLabel aria-required={true}>ZipCode</FormLabel>
          <Input {...register("FullAddress.zipCode")} placeholder="Zip Code" />
          <FormError error={errors.FullAddress?.zipCode} />
        </FormDiv>

        <FormDiv>
          <FormLabel aria-required={true}>Country</FormLabel>
          <Input {...register("FullAddress.country")} placeholder="Country" />
          <FormError error={errors.FullAddress?.country} />
        </FormDiv>
      </div>

      <FormDiv>
        <FormLabel aria-required={true}>Age</FormLabel>
        <h3 className="text-green text-xs">
          In case of a minor i.e. less than 18 years the Doctor consultation
          will be with the guardian/caretaker
        </h3>
        <Input {...register("age")} placeholder="Age" />
        <FormError error={errors.age} />
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>I am seeking</FormLabel>
        <div className="flex justify-start items-center gap-2">
          <input type="radio" value={"Male"} />
          <label htmlFor="male">Sick Leave Certificate</label>
        </div>
        <div className="flex justify-start items-center gap-2">
          <input type="radio" value={"Female"} />
          <label htmlFor="Female">Fitness Certificate</label>
        </div>
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>
          When do you want the medical certificate from?
        </FormLabel>
        <h3 className="text-green text-xs">
          Future date certificates cannot be issued.
        </h3>
        <Input type="date" {...register("date")} />
      </FormDiv>

      <FormDiv>
        <FormLabel aria-required={true}>
          Please Upload Screen Shot of payment
        </FormLabel>
        <Input type="file" {...register("isScreenShotUploaded")} />
        <FormError error={errors.isScreenShotUploaded} />
      </FormDiv>

      <Button type="submit" className="self-center">
        Submit
      </Button>
    </form>
  );
};

export default SickCertificateForm;