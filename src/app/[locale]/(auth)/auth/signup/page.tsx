"use client";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Signup from "@/components/auth/Signup";
import OTP from "@/components/auth/OTP";
import Register from "@/components/auth/Register";
import Link from "next/link";
import { useState } from "react";

const SignUpPage = () => {
  const t = useTranslations("login_signup");
  const [showOTP, setShowOTP] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-[70%] md:h-fit flex md:flex-row flex-col w-[90%] max-w-[900px] bg-white shadow-lg rounded-lg overflow-auto md:overflow-hidden">
        <div className="hidden md:w-1/2 bg-primary md:flex flex-col items-center justify-center relative p-6 text-white">
          <span className="mb-6 text-xl">{t("already")}</span>
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

          <Link
            href="/auth/login"
            className="absolute bottom-4 flex flex-col items-center bg-white text-gray-700 p-2 rounded-md shadow-md cursor-pointer"
          >
            <p className="text-sm font-semibold">{t("login")}</p>
            <p className="text-xs">{t("click_login")}</p>
          </Link>
        </div>

        {showRegistration ? (
          <Register />
        ) : showOTP ? (
          <OTP setShowRegistration={setShowRegistration} />
        ) : (
          <Signup setShowOTP={setShowOTP} />
        )}

        {!showRegistration && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col items-center justify-center px-8 gap-2 text-primary">
              <span className="text-[16px] text-center">{t("already")}</span>
              <Link href="/auth/login" className="w-full">
                <Button type="button" theme="secondary" isWidthFull>
                  {t("login")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
