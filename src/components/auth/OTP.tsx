"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../buttons/Button";

const OTP = ({ setShowRegistration }: { setShowRegistration: (value: boolean) => void }) => {
  const t = useTranslations("otp");

  const schema = z.object({
    otp: z
      .string()
      .length(4, t("invalid_otp"))
      .regex(/^\d{4}$/, t("invalid_otp")),
  });

  type FormData = z.infer<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);
  const otpRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null));

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/, "");
    if (value.length === 1 && index < 3) {
      otpRefs.current[index + 1]?.focus();
    }
    setValue("otp", otpRefs.current.map((input) => input?.value).join(""));
  };

  const handleOtpKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otpRefs.current[index]?.value && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpSubmit = (data: FormData) => {
    console.log("OTP Submitted:", data);
    setShowRegistration(true); // Show Registration component after OTP verification
  };

  const handleResendOtp = () => {
    setTimer(60);
    setResendDisabled(true);
    console.log("OTP Resent");
  };

  return (
    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {t("otp_verification")}
        </h2>
        <p className="text-center text-gray-500 mt-2">{t("enter_otp")}</p>

        <form onSubmit={handleSubmit(handleOtpSubmit)} className="mt-6">
          <div className="flex justify-center gap-2">
            {Array.from({ length: 4 }, (_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-xl text-center border rounded-md focus:ring-2 focus:ring-primary outline-none"
                {...register("otp")}
                ref={(el) => {
                  otpRefs.current[i] = el;
                }}
                onChange={(e) => handleOtpChange(i, e)}
                onKeyDown={(e) => handleOtpKeyDown(i, e)}
              />
            ))}
          </div>
          {errors.otp && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errors.otp.message}
            </p>
          )}

          <Button type="submit" theme="primary" isWidthFull className="mt-4">
            {t("verify")}
          </Button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              {t("resend_in")} {timer}s
            </p>
            <button
              type="button"
              className={`text-primary mt-2 ${
                resendDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleResendOtp}
              disabled={resendDisabled}
            >
              {t("resend_otp")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
