"use client";

import * as z from "zod";
import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { contactFormSchema } from "@/lib/zodSchema";

export default function useSendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendEmail(data: z.infer<typeof contactFormSchema>) {
    setIsLoading(true);
    setError(null);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        }
      );
    } catch (error) {
      if (error instanceof EmailJSResponseStatus) {
        setError(error.text);
      }
      setError("An error occurred while sending the email.");
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, sendEmail };
}
