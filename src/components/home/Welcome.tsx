"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Welcome = () => {
  const router = useRouter();
  const t = useTranslations("home.welcome");
  return (
    <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[62%] grid grid-cols-3 gap-6 px-6 md:px-0 py-4 md:py-6 items-center">
      <div className="col-span-3 md:col-span-2">
        <h1 className="text-[20px] md:text-[32px] font-bold text-center md:text-left">
          {t("title")}
        </h1>
        <h1 className="text-[16px] md:text-[24px] font-semibold text-gray-600 text-center md:text-left mt-2 mb-4 md:mb-6">
          {t("subtitle")}
        </h1>
        <p className="text-[14px] md:text-[16px] text-gray-500 text-justify">
          {t("description_1")}
          <br />
          {t("description_2")}
          <br />
          {t("description_3")}
        </p>
        <Image
          src="/images/hospital.jpg"
          alt="Welcome"
          width={300}
          height={300}
          className="md:hidden w-full h-full object-cover mt-4"
        />
        <div className="flex justify-center md:justify-start my-6">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            {t("appointment")}
          </button>
          <button className="bg-white text-primary px-4 py-2 rounded-md ml-4">
            {t("learn")}
          </button>
        </div>
      </div>
      <div className="hidden col-span-3 md:col-span-1 md:flex flex-col gap-0">
        <div className="w-full h-[300px]">
          <Image
            src="/images/hospital.jpg"
            alt="Welcome"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="w-full flex flex-col justify-center items-center bg-primary_light py-2 text-white px-4 cursor-pointer hover:border hover:border-primary hover:bg-white hover:text-primary"
          onClick={() => router.push("/about")}
        >
          <div className="text-[14px] md:text-[16px] font-semibold">
            {t("more_about")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
