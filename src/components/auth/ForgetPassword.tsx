"use client";
import { useRouter } from "@/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import React from "react";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../buttons/Button";
import EmailInput from "../inputs/EmailInput";

const ForgetPassword = () => {
  const router = useRouter();
  const t = useTranslations();
  const schema = z.object({
    email: z.string().email("Invalid email"),
  });

  type FormData = z.infer<typeof schema>;
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleLogin = (data: FormData) => {
    alert("Form submitted: " + JSON.stringify(data));
  };
  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        {t("forget_password.title")}
      </h2>
      <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
        <EmailInput
          name="email"
          label={t("login_signup.email")}
          error={errors.email as FieldError}
          register={register}
          isRequired
          placeholder={t("login_signup.email_placeholder")}
        />
        <Button type="submit" theme="primary" isWidthFull className="mt-4">
          {t("forget_password.submit")}
        </Button>
      </form>
    </div>
  );
};

export default ForgetPassword;
