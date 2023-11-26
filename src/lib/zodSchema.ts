import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(3).max(26),
  lastName: z.string().min(3).max(26),
  email: z.string().email(),
  phoneNumber: z.string(),
  message: z.string().max(300).optional(),
  reasonOfContacting: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});
