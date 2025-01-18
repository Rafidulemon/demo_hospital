"use client";
import React from "react";
import Image from "next/image";
import Search from "../../search/Search";
import { FaPhoneAlt } from "react-icons/fa";
import Nav from "../Navbar";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguageHandler = (locale: "en" | "bn" | undefined) => {
    router.replace(pathname, { locale });
  };

  return (
    <header className="fixed top-0 z-50 bg-white w-full flex flex-col gap-0">
      <div className="w-full lg:w-[80%] mx-auto px-4 flex flex-row items-center justify-between">
        <div className="flex items-center gap-4 w-[60px] h-[55px] md:w-[120px] md:h-[109px]" onClick={() => router.push("/")}>
          <Image
            src="/logo/logo.png"
            alt="Patiya General Hospital"
            width={120}
            height={109}
            className="object-contain"
          />
        </div>

        <div className="hidden md:flex flex-col">
          <Search />
        </div>

        <div className="flex flex-row items-end gap-2 md:gap-6">
          <div className="flex flex-col gap-[1px] md:gap-[2px] items-start">
            <span className="text-black text-[12px] md:text-[14px] font-medium">
              {t("header.emergency")}
            </span>
            <div className="group cursor-pointer text-[10px] md:text-[16px] hover:bg-primary border border-primary rounded-md flex flex-row items-center gap-[3px] md:gap-2 py-1 md:py-2 px-1 md:px-3">
              <FaPhoneAlt className="text-primary group-hover:text-white"/>
              <span className="text-black text-[12px] md:text-[14px] font-medium group-hover:text-white">
                12345
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[1px] md:gap-[2px] items-start">
            <span className="text-black text-[12px] md:text-[14px] font-medium">
              {t("header.lifeline")}
            </span>
            <div className="group cursor-pointer text-[10px] md:text-[16px] hover:bg-primary border border-primary rounded-md flex flex-row items-center gap-[3px] md:gap-2 py-1 md:py-2 px-1 md:px-3">
              <FaPhoneAlt className="text-primary group-hover:text-white" />
              <span className="text-black text-[12px] md:text-[14px] font-medium group-hover:text-white">
                +8801365412345
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center ml-10">
            <button
              onClick={() => changeLanguageHandler("en")}
              className={`h-[38px] px-4 py-2 text-[12px] md:text-[14px] font-medium rounded-l-md transition-all duration-200 focus:outline-none ${
                locale === "en"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-primary"
              }`}
            >
              English
            </button>
            <button
              onClick={() => changeLanguageHandler("bn")}
              className={`h-[38px] px-4 py-2 text-[12px] md:text-[14px] font-medium rounded-r-md transition-all duration-200 focus:outline-none ${
                locale === "bn"
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-primary"
              }`}
            >
              বাংলা
            </button>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-center md:ml-10">
          <button
            onClick={() => changeLanguageHandler("en")}
            className={`px-2 py-1 text-[12px] font-medium rounded-l-sm transition-all duration-200 focus:outline-none ${
              locale === "en"
                ? "bg-primary text-white shadow-md"
                : "bg-gray-100 text-primary"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguageHandler("bn")}
            className={`px-2 py-1 text-[12px] font-medium rounded-r-sm transition-all duration-200 focus:outline-none ${
              locale === "bn"
                ? "bg-primary text-white shadow-md"
                : "bg-gray-100 text-primary"
            }`}
          >
            বাং
          </button>
        </div>
      </div>
      <div className="my-2 md:my-0 px-4 md:px-0 w-full flex flex-row justify-between items-center">
        <div className="md:hidden flex-col">
          <Search />
        </div>
        <Nav />
      </div>
    </header>
  );
}
