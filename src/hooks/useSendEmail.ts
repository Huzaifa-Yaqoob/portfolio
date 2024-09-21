"use client";

import * as z from "zod";
import { useState } from "react";
import { contactFormSchema } from "@/lib/zodSchema";

export default function useSendEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendEmail(data: z.infer<typeof contactFormSchema>) {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        return true;
      } else {
        throw new Error(
          res.statusText || "An error occurred while sending the email."
        );
      }
    } catch (error: any) {
      setError(error.message as string);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, sendEmail };
}
