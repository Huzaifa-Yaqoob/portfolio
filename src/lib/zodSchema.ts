import * as z from "zod";

export const contactFormSchema = z
  .object({
    firstName: z.string().min(3).max(26),
    lastName: z.string().min(3).max(26),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    message: z.string().max(300).optional(),
    reasonOfContacting: z
      .array(z.string())
      .refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
      }),
  })
  .refine((data) => data.email || data.phoneNumber, {
    message: "Either email or phone number must be provided.",
    path: ["email", "phoneNumber"], // Error path for both fields
  })
  .refine(
    (data) =>
      !data.email ||
      (data.email && z.string().email().safeParse(data.email).success),
    {
      message: "Invalid email format.",
      path: ["email"], // Error path for email field
    }
  );
