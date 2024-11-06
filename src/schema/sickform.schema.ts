import { z } from "zod";

const formType = z.enum(["Sick Leave Certificate", "Fitness Certificate"]);

const FullAddress = z.object({
  address: z.string().min(1, "required"),
  city: z.string().min(1, "required"),
  state: z.string().min(1, "required"),
  country: z.string().min(1, "required"),
  zipCode: z.string().min(1, "required"),
});

const baseSchema = z.object({
  termsAndConditions: z
    .boolean()
    .refine((value) => value, "Please accept terms and conditions"),
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
  date: z.string().refine((val) => {
    const today = new Date().toISOString().split("T")[0];
    return val <= today;
  }, "Date cannot be in the future"),
  isScreenShotUploaded: z
    .any()
    .refine((files) => files?.length == 1, "Payment Image is required."),
  GovtIDCard: z
    .any()
    .refine((files) => files?.length == 1, "ID Card is required."),
});

const SickSchema = z.object({
  formType: z.literal("Sick Leave Certificate"),
  numOfDays: z.string().min(1, "Required"),
  additionalDetails: z.string().min(1, "Required"),
});

const FitnessSchema = z.object({
  formType: z.literal("Fitness Certificate"),
  shareInformation: z.boolean().refine((value) => value, "Please accept it."),
});

const schemaConditions = z.discriminatedUnion("formType", [
  SickSchema,
  FitnessSchema,
]);

export const SickLeaveFormSchema = z.intersection(schemaConditions, baseSchema);
