"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Departments = () => {
  const router = useRouter();
  const t = useTranslations("home.departments");
  return (
    <div className="w-full bg-primary_light flex flex-col items-center">
      <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[62%] grid grid-cols-3 gap-6 px-6 md:px-0 py-4 md:py-6 items-center">
        <div className="col-span-3 text-white text-center md:text-left">
          <h1 className="text-[20px] md:text-[32px] font-bold">
          {t("title")}
          </h1>
          <p className="text-[16px] md:text-[24px]">
          {t("subtitle")}
          </p>
        </div>
        <div className="col-span-3 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:flex flex-col gap-0">
            <div className="w-full h-[300px]">
              <Image
                src="/images/surgery.jpg"
                alt="Welcome"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-full flex flex-col justify-center items-center bg-white py-2 text-primary px-4 cursor-pointer"
              onClick={() => router.push("/about")}
            >
              <div className="text-[14px] md:text-[16px] font-semibold">
                {t("surgery")}
              </div>
            </div>
          </div>

          <div className="md:flex flex-col gap-0">
            <div className="w-full h-[300px]">
              <Image
                src="/images/radiology.jpg"
                alt="Welcome"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-full flex flex-col justify-center items-center bg-white py-2 text-primary px-4 cursor-pointer"
              onClick={() => router.push("/about")}
            >
              <div className="text-[14px] md:text-[16px] font-semibold">
              {t("radiology")}
              </div>
            </div>
          </div>

          <div className="md:flex flex-col gap-0">
            <div className="w-full h-[300px]">
              <Image
                src="/images/pathology.jpg"
                alt="Welcome"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="w-full flex flex-col justify-center items-center bg-white py-2 text-primary px-4 cursor-pointer"
              onClick={() => router.push("/about")}
            >
              <div className="text-[14px] md:text-[16px] font-semibold">
              {t("pathology")}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 md:flex flex-col gap-6 justify-start items-start h-full text-justify">
          <h1 className="text-[16px] md:text-[24px] font-bold text-white">
          {t("eqp")}
          </h1>
          <p className="text-[14px] md:text-[18px] text-gray-100">
          {t("eqp_details")}
          </p>
          <div className="w-full flex flex-row justify-center items-center bg-white px-4 py-1 cursor-pointer">
            <span className="text-primary font-[500]">
            {t("checkout")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
