"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Button from "@/components/buttons/Button";
import MobileNumberInput from "@/components/inputs/MobileNumberInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const router = useRouter();
  const t = useTranslations("login_signup");
  const schema = z.object({
    mobile: z
      .string()
      .length(11, t("invalid_phone"))
      .regex(/^01[3-9]\d{8}$/, t("invalid_phone")),
    password: z.string().min(6, t("min_pass")),
  });
  

  type FormData = z.infer<typeof schema>;
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleForgotPasswordClick = () => {
    router.push("/auth/forget-password");
  };

  const handleLogin = (data: FormData) => {
    console.log("Form submitted:", data);
    router.push("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[70%] md:h-fit flex md:flex-row flex-col w-[90%] max-w-[900px] bg-white shadow-lg rounded-lg overflow-y-auto">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center text-gray-700">
            {t("login")}
          </h2>
          <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
            <MobileNumberInput
              name="mobile"
              error={errors.mobile}
              label={t("phone")}
              register={register}
              isRequired
              placeholder={t("phone_placeholder")}
            />

            <PasswordInput
              name="password"
              error={errors.password}
              register={register}
              label={t("password")}
              isRequired
              placeholder={t("password_placeholder")}
            />
            <div className="flex justify-between items-center mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {t("remember")}
              </label>
              <span
                onClick={handleForgotPasswordClick}
                className="text-primary cursor-pointer"
              >
                {t("forget")}
              </span>
            </div>
            <Button type="submit" theme="primary" isWidthFull className="mt-4">
              {t("login")}
            </Button>
            <p className="text-sm text-center mt-4 text-gray-500 cursor-pointer">
              {t("access")}
            </p>
          </form>
        </div>

        {/* Right Side (Image & Extras) */}
        <div className="hidden md:w-1/2 bg-primary md:flex flex-col items-center justify-center relative p-6 text-white">
          <span className="mb-6 text-xl">{t("no_account")}</span>
          <div
            className="bg-gradient-to-br from-blue-300 to-white w-[200px] h-[270px] flex justify-center items-center"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <Image
              src="/images/sign_up_doctor.png"
              alt="Doctor"
              width={170}
              height={170}
            />
          </div>

          <div
            className="absolute bottom-10 flex flex-col items-center bg-white text-gray-700 p-2 rounded-md shadow-md cursor-pointer"
            onClick={() => router.push("/auth/signup")}
          >
            <p className="text-sm font-semibold">{t("signup")}</p>
            <p className="text-xs">{t("click_signup")}</p>
          </div>
        </div>

        <div className="md:hidden bg-primary h-full grid grid-cols-2 gap-6">
          <div className="flex flex-col items-center justify-center p-6 text-white">
            <span className="mb-6 text-xl">{t("no_account")}</span>
            <Button
              type="button"
              theme="secondary"
              isWidthFull
              className="mt-4"
              onClick={() => router.push("/auth/signup")}
            >
              {t("signup")}
            </Button>
          </div>
          <div className="h-full flex flex-col justify-end">
            <Image
              src="/images/sign_up_doctor.png"
              alt="Doctor"
              width={120}
              height={120}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
