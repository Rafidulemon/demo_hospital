"use client";
import React from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

const AuthHeader = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const changeLanguageHandler = (locale: "en" | "bn" | undefined) => {
    router.replace(pathname, { locale });
  };
  return (
    <div className="w-full flex flex-row justify-between">
      <div
        className="flex items-center gap-4 w-[80px] h-[65px] md:w-[120px] md:h-[109px] cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src="/logo/logo.png"
          alt="Patiya General Hospital"
          width={120}
          height={109}
          className="object-contain"
        />
      </div>

      <div className="flex items-center justify-center ml-10">
        <button
          onClick={() => changeLanguageHandler("en")}
          className={`h-[38px] px-2 md:px-4 py-1 md:py-2 text-[12px] md:text-[14px] font-medium rounded-l-md transition-all duration-200 focus:outline-none ${
            locale === "en"
              ? "bg-primary text-white shadow-md"
              : "bg-gray-100 text-primary"
          }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguageHandler("bn")}
          className={`h-[38px] px-2 md:px-4 py-1 md:py-2 text-[12px] md:text-[14px] font-medium rounded-r-md transition-all duration-200 focus:outline-none ${
            locale === "bn"
              ? "bg-primary text-white shadow-md"
              : "bg-gray-100 text-primary"
          }`}
        >
          বাংলা
        </button>
      </div>
    </div>
  );
};

export default AuthHeader;
