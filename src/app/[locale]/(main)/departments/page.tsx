import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaTooth, FaHeartbeat } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import { GiStomach, GiScalpel, GiMedicines, GiKidneys } from "react-icons/gi";
import { IoMdFemale } from "react-icons/io";
import { LuPill, LuBrain, LuBaby, LuSun } from "react-icons/lu";
import { PiBoneBold } from "react-icons/pi";
import { IoEarOutline } from "react-icons/io5";

const departments = [
  { key: "medicine", icon: <LuPill />, href: "/departments/medicine" },
  { key: "ortho", icon: <PiBoneBold />, href: "/departments/orthopedics" },
  { key: "phy_medicine", icon: <GiMedicines />, href: "/departments/phy_medicine" },
  { key: "urology", icon: <GiKidneys />, href: "/departments/urology" },
  { key: "cardio", icon: <FaHeartbeat />, href: "/departments/cardio" },
  { key: "surgery", icon: <GiScalpel />, href: "/departments/surgery" },
  { key: "gynecology", icon: <IoMdFemale />, href: "/departments/gynecology" },
  { key: "ent", icon: <IoEarOutline />, href: "/departments/ent" },
  { key: "gastroenterology", icon: <GiStomach />, href: "/departments/gastroenterology" },
  { key: "pediatrics", icon: <LuBaby />, href: "/departments/pediatrics" },
  { key: "skin_vd", icon: <LuSun />, href: "/departments/skin_vd" },
  { key: "neuro", icon: <LuBrain />, href: "/departments/neuro" },
  { key: "dermatology", icon: <LuSun />, href: "/departments/dermatology" },
  { key: "dentistry", icon: <FaTooth />, href: "/departments/dentistry" },
];

const DepartmentsPage = () => {
  const t = useTranslations();

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[220px] md:h-[600px] mt-[100px] md:mt-[150px]">
        <Image
          src="/images/departments.jpg"
          alt="FAQ"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[24px] md:text-[48px] font-bold">
            {t("nav.department")}
          </h1>
        </div>
      </div>

      {/* Departments At a Glance */}
      <section className="py-8">
        <div className="px-4 md:px-10">
          <ul className="mt-4 text-black grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 text-center">
            {departments.map(({ key, icon, href }) => (
              <Link
                href={href}
                key={key}
                className="group relative h-[170px] md:h-[300px] cursor-pointer p-2 md:p-4 bg-white shadow-sm md:shadow-md shadow-primary rounded-md border border-primary flex flex-col items-center justify-center space-y-2 transition-all duration-300 hover:scale-105"
              >
                <div className="text-[32px] md:text-[70px] text-primary md:bg-gradient-to-t from-sky-100 to-white md:p-10">{icon}</div>
                <span className="font-semibold text-[16px] md:text-[24px]">{t(`departments.${key}`)}</span>
                <div className="hidden md:flex absolute bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in">
                  <Button >{t("departments.details")}</Button>
                </div>
                <div className="absolute bottom-2 md:hidden text-primary">{t("departments.details")}</div>
              </Link>
            ))}
          </ul>
        </div>
      </section>

      {/* Shortcut Buttons */}
      <section className="py-8">
        <div className="px-4 md:px-10 flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center">
          <Link href="/contact" className="w-[70%] md:w-fit">
            <Button theme="secondary" className="w-full md:w-fit">
              {t("shortcuts.contact")}
            </Button>
          </Link>
          <Link href="/appointment" className="w-[70%] md:w-fit">
            <Button className="w-full md:w-fit">
              {t("shortcuts.appointment")}
            </Button>
          </Link>
          <a
            href="https://www.google.com/maps/place/Patiya+Upazila/@22.294119,91.976584,14z/data=!4m6!3m5!1s0x30ad237be723c31f:0x232df16458730624!8m2!3d22.2949743!4d91.9759487!16s%2Fm%2F028c47s?hl=en&entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[70%] md:w-fit"
          >
            <Button theme="secondary" className="w-full md:w-fit">
              {t("shortcuts.find")}
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DepartmentsPage;
