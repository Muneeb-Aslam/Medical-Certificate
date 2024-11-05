import { z } from "zod";

const formType = z.enum(["Sick Leave Certificate", "Fitness Certificate"]);

const FullAddress = z.object({
  address: z.string().min(1, "required"),
  city: z.string().min(1, "required"),
  state: z.string().min(1, "required"),
  country: z.string().min(1, "required"),
  zipCode: z.string().min(1, "required"),
});

export const SickLeaveFormSchema = z.object({
  termsAndConditions: z
    .boolean()
    .refine((value) => value, "Please Upload Screen Shot Payment"),
  firstName: z.string().min(1, "Frist Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  phoneNumber: z.string().min(11, "required"),
  email: z.string().email(),
  gender: z.string().min(11, "required"),
  careOf: z.string().min(1, "required"),
  FullAddress: FullAddress,
  age: z.string().refine((value) => value, "Required"),
  formType: formType,
  detailsOfMedicalProblem: z.string().optional(),
  date: z.string().min(1),
  isScreenShotUploaded: z
    .any()
    .refine((files) => files?.length == 1, "Image is required."),
});
