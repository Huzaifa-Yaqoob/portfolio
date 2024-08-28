"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema } from "@/lib/zodSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { checkboxData } from "@/data/formData";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      reasonOfContacting: ["others"],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 md:space-y-0 p-4 md:p-16 md:gap-8 md:grid md:grid-cols-2 bg-peachShades-p96 rounded text-greyShades-g10"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="placeholder:text-greyShades-g20 bg-peachShades-p95"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="placeholder:text-greyShades-g20 bg-peachShades-p95"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email"
                  className="placeholder:text-greyShades-g20 bg-peachShades-p95"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Phone Number"
                  className="placeholder:text-greyShades-g20 bg-peachShades-p95"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-2 bg-peachShades-p95 p-4 rounded">
          <FormField
            control={form.control}
            name="reasonOfContacting"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">
                    Why are you contacting us?
                  </FormLabel>
                </div>
                <div className="md:grid md:grid-rows-2 md:grid-cols-2 md:gap-4 space-y-4 md:space-y-0">
                  {checkboxData.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="reasonOfContacting"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0 cursor-pointer"
                          >
                            <FormControl>
                              <Checkbox
                                name={item.label}
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer w-full">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormControl>
                <Textarea
                  placeholder="Your Message Here"
                  {...field}
                  className="placeholder:text-greyShades-g20 bg-peachShades-p95"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center col-span-2"></div>
        <Button type="submit" className="px-8">
          Send
        </Button>
      </form>
      <span>This part is just for showcase</span>
    </Form>
  );
}
