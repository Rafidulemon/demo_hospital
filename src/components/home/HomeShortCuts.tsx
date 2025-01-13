import React from "react";
import {
  FaCalendarAlt,
  FaHospital,
  FaStethoscope,
  FaUserMd,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const HomeShortCuts = () => {
  const t = useTranslations();
  return (
    <div className="-mt-[80px] z-10">
      <section className="hidden px-6 py-10 md:flex flex-row ">
        <div
          className="flex flex-col gap-1 h-[220px] w-[300px] bg-[#055658] text-white justify-center items-center p-4 cursor-pointer relative group"
          style={{
            clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)",
          }}
        >
          <FaHospital size={40} />
          <h3 className="text-xl font-bold text-center">
            {t("home-short.departments")}
          </h3>
          <p className="text-center text-sm group-hover:-mt-2">
            {t("home-short.departments-details")}
          </p>
          <button className="mt-1 text-sm bg-white text-primary px-4 py-[2px] opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out">
            {t("home-short.more")}
          </button>
        </div>

        <div
          className="flex flex-col gap-1 h-[220px] w-[300px] bg-primary text-white justify-center items-center p-4 cursor-pointer relative group -ml-1"
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)",
          }}
        >
          <FaStethoscope size={40} />
          <h3 className="text-xl font-bold text-center">
            {t("home-short.services")}
          </h3>
          <p className="text-center text-sm group-hover:-mt-2">
            {t("home-short.request-details")}
          </p>
          <button className="mt-1 text-sm bg-white text-primary px-4 py-[2px] opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out">
            {t("home-short.more")}
          </button>
        </div>

        <div
          className="flex flex-col gap-1 h-[220px] w-[300px] bg-[#068184] text-white justify-center items-center p-4 cursor-pointer relative group -ml-1"
          style={{
            clipPath: "polygon(0 0, 100% 15%, 100% 85%, 0 100%)",
          }}
        >
          <FaUserMd size={40} />
          <h3 className="text-xl font-bold text-center">
            {t("home-short.find")}
          </h3>
          <p className="text-center text-sm group-hover:-mt-2">
            {t("home-short.find-details")}
          </p>
          <button className="mt-1 text-sm bg-white text-primary px-4 py-[2px] opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out">
            {t("home-short.more")}
          </button>
        </div>

        {/* Fourth Box */}
        <div
          className="flex flex-col gap-1 h-[220px] w-[300px] bg-[#08a7aa] text-white justify-center items-center p-4 cursor-pointer relative group -ml-1"
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 85%)",
          }}
        >
          <FaCalendarAlt size={40} />
          <h3 className="text-xl font-bold text-center">
            {t("home-short.request")}
          </h3>
          <p className="text-center text-sm group-hover:-mt-2">
            {t("home-short.request-details")}
          </p>
          <button className="mt-1 text-sm bg-white text-primary px-4 py-[2px] opacity-0 group-hover:opacity-100 transition duration-1000 ease-in-out">
            {t("home-short.more")}
          </button>
        </div>
      </section>

      <section className=" mt-[60px] md:hidden px-6 py-10 grid grid-cols-2">
        
          <div className="flex flex-col gap-1 h-[160px] bg-[#055658] text-white justify-start items-center p-4 cursor-pointer relative group">
            <FaHospital size={30} />
            <h3 className="text-[16px] font-bold text-center">
              {t("home-short.departments")}
            </h3>
            <p className="text-center text-[14px] group-hover:-mt-2">
              {t("home-short.departments-details")}
            </p>
          </div>

          <div className="flex flex-col gap-1 h-[160px] bg-primary text-white justify-start items-center p-4 cursor-pointer relative group -ml-1">
            <FaStethoscope size={30} />
            <h3 className="text-[16px] font-bold text-center">
              {t("home-short.services")}
            </h3>
            <p className="text-center text-[14px] group-hover:-mt-2">
              {t("home-short.request-details")}
            </p>
          </div>

        
          <div className="flex flex-col gap-1 h-[160px] bg-[#068184] text-white justify-start items-center p-4 cursor-pointer relative group">
            <FaUserMd size={30} />
            <h3 className="text-[16px] font-bold text-center">
              {t("home-short.find")}
            </h3>
            <p className="text-center text-[14px] group-hover:-mt-2">
              {t("home-short.find-details")}
            </p>
          </div>

          <div className="flex flex-col gap-1 h-[160px] bg-[#08a7aa] text-white justify-start items-center p-4 cursor-pointer relative group -ml-1">
            <FaCalendarAlt size={30} />
            <h3 className="text-[16px] font-bold text-center">
              {t("home-short.request")}
            </h3>
            <p className="text-center text-[14px] group-hover:-mt-2">
              {t("home-short.request-details")}
            </p>
          </div>
      </section>
    </div>
  );
};

export default HomeShortCuts;
