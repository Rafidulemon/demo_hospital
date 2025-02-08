"use client";
import React from "react";
import MobileNumberInput from "../inputs/MobileNumberInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { z } from "zod";
import Button from "../buttons/Button";

const Signup = ({ setShowOTP }: { setShowOTP: (value: boolean) => void }) => {
  const t = useTranslations("login_signup");
  const schema = z.object({
    mobile: z
      .string()
      .length(11, t("invalid_phone"))
      .regex(/^01[3-9]\d{8}$/, t("invalid_phone")),
  });

  type FormData = z.infer<typeof schema>;
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSignup = (data: FormData) => {
    console.log("Form submitted:", data);
    setShowOTP(true);
  };

  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        {t("signup")}
      </h2>
      <form onSubmit={handleSubmit(handleSignup)} className="mt-6">
        <MobileNumberInput
          name="mobile"
          error={errors.mobile}
          label={t("phone")}
          register={register}
          isRequired
          placeholder={t("phone_placeholder")}
        />
        <Button type="submit" theme="primary" isWidthFull className="mt-4">
          {t("signup")}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
