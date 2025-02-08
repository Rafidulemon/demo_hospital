"use client";
import React, { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useTranslations } from "next-intl";
import TextInput from "../inputs/TextInput";
import EmailInput from "../inputs/EmailInput";
import MobileNumberInput from "../inputs/MobileNumberInput";
import PasswordInput from "../inputs/PasswordInput";
import RadioGroup from "../inputs/RadioGroup";
import Button from "../buttons/Button";

const Register = () => {
  const router = useRouter();
  const t = useTranslations("login_signup");

  const genderOptions = [
    { label: t("male"), value: "male" },
    { label: t("female"), value: "female" },
    { label: t("other"), value: "other" },
  ];
  
  const schema = z.object({
      name: z.string().min(1, "Name is required"),
      mobile: z.string().length(11, "Invalid phone number").regex(/^01[3-9]\d{8}$/, "Invalid phone number"),
      email: z.string().email("Invalid email"),
      age: z.string().min(1, "Age is required"),
      gender: z.enum(["male", "female", "other"], {
        required_error: "Gender is required",
      }),
      dob: z.string().min(1, "Date of birth is required"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirm_password: z.string().min(6, "Confirm password must be at least 6 characters"),
    }).refine((data) => data.password === data.confirm_password, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [gender, setGender] = useState("");
  const handleSignup = (data: any) => {
    console.log("Form submitted:", data);
    router.push("/auth/login");
  };

  return (
    <div className="h-[80vh] overflow-y-auto w-full md:w-1/2 p-8 flex flex-col justify-start">
      <h2 className="text-2xl font-bold text-center text-gray-700">
        {t("signup")}
      </h2>
      <form onSubmit={handleSubmit(handleSignup)} className="mt-6 flex flex-col gap-4">
        <TextInput
          name="name"
          label={t("name")}
          error={errors.name as FieldError}
          register={register}
          isRequired
          placeholder={t("name_placeholder")}
        />
        <MobileNumberInput
          name="mobile"
          label={t("phone")}
          error={errors.mobile as FieldError}
          register={register}
          isRequired
          placeholder={t("phone_placeholder")}
        />
        <EmailInput
          name="email"
          label={t("email")}
          error={errors.email as FieldError}
          register={register}
          isRequired
          placeholder={t("email_placeholder")}
        />
        <TextInput
          name="age"
          label={t("age")}
          error={errors.age as FieldError}
          register={register}
          isRequired
          placeholder={t("age_placeholder")}
        />
        <TextInput
          name="dob"
          label={t("dob")}
          error={errors.dob as FieldError}
          register={register}
          isRequired
          placeholder="YYYY-MM-DD"
        />
        <RadioGroup
          name="gender"
          title={t("gender")}
          options={genderOptions}
          selectedValue={gender}
          onChange={setGender}
          error={errors.gender as FieldError}
          isRequired
        />
        <PasswordInput
          name="password"
          label={t("password")}
          error={errors.password as FieldError}
          register={register}
          isRequired
          placeholder={t("password_placeholder")}
        />
        <PasswordInput
          name="confirm_password"
          label={t("confirm_password")}
          error={errors.confirm_password as FieldError}
          register={register}
          isRequired
          placeholder={t("confirm_password_placeholder")}
        />
        <Button type="submit" theme="primary" isWidthFull className="mt-4">
          {t("signup")}
        </Button>
      </form>
    </div>
  );
};

export default Register;
