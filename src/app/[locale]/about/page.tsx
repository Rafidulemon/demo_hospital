import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TiTick } from "react-icons/ti";
import {
  UserCheck,
  Hospital,
  Microscope,
  HeartPulse,
  Smile,
  LifeBuoy,
} from "lucide-react";
import {
  Heart,
  Award,
  Lightbulb,
  ShieldCheck,
  Star,
  Cross,
} from "lucide-react";

import {
  Brain,
  Bone,
  Baby,
  Stethoscope,
  Radiation,
  Ear,
  BrainCircuit,
  Sun,
} from "lucide-react";
import { FaTooth } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import Link from "next/link";

const departments = [
  { key: "cardio", icon: <Heart size={32} />, href: "/departments/cardiology" },
  { key: "neuro", icon: <Brain size={32} />, href: "/departments/neurology" },
  { key: "ortho", icon: <Bone size={32} />, href: "/departments/orthopedics" },
  {
    key: "pediatrics",
    icon: <Baby size={32} />,
    href: "/departments/pediatrics",
  },
  {
    key: "gynecology",
    icon: <Stethoscope size={32} />,
    href: "/departments/gynecology",
  },
  {
    key: "oncology",
    icon: <Radiation size={32} />,
    href: "/departments/oncology",
  },
  {
    key: "dentistry",
    icon: <FaTooth size={32} />,
    href: "/departments/dentistry",
  },
  { key: "ent", icon: <Ear size={32} />, href: "/departments/ent" },
  {
    key: "radiology",
    icon: <Microscope size={32} />,
    href: "/departments/radiology",
  },
  {
    key: "nephrology",
    icon: <GiKidneys size={32} />,
    href: "/departments/nephrology",
  },
  {
    key: "psychiatry",
    icon: <BrainCircuit size={32} />,
    href: "/departments/psychiatry",
  },
  {
    key: "dermatology",
    icon: <Sun size={32} />,
    href: "/departments/dermatology",
  },
];

const AboutPage = () => {
  const t = useTranslations();
  return (
    <div className="w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[220px] md:h-[600px] mt-[100px] md:mt-[150px]">
        <Image
          src="/images/about.jpeg"
          alt="FAQ"
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[24px] md:text-[48px] font-bold">
            {t("nav.about")}
          </h1>
        </div>
      </div>

      {/* Hospital Overview */}
      <section className="px-4 md:px-10 py-8">
        <h2 className="text-[20px] md:text-3xl font-semibold text-gray-800 text-center">
          {t("about.hospital_overview")}
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/overview.png"
              alt="Welcome"
              width={100}
              height={100}
              className="w-[50%] object-cover"
            />
          </div>
          <p className="mt-4 text-gray-600 text-justify">
            {t("about.hospital_description")}
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="px-4 md:px-10 py-8 bg-gray-100">
        <h2 className="text-[20px] md:text-3xl font-semibold text-gray-800 text-center">
          {t("about.mission_vision")}
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Mission */}
          <div className="p-6 bg-white shadow-md rounded-md flex flex-col items-center">
            <h3 className="text-[20px] md:text-xl font-semibold text-primary flex items-center gap-2">
              {t("about.mission")}
            </h3>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="w-full h-full items-center justify-center flex">
                <Image
                  src="/images/mission.png"
                  alt="Mission"
                  width={150}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 mt-3 text-gray-600 flex flex-col items-start gap-2">
                <p className="text-black font-[600]">
                  {t("about.mission_desc")}
                </p>
                <div className="flex items-start gap-2">
                  <div className="mt-1">
                    <TiTick className="text-primary" size={20} />
                  </div>
                  <p className="text-justify">{t("about.mission_state")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="p-6 bg-white shadow-md rounded-md flex flex-col items-center">
            <h3 className="text-[20px] md:text-xl font-semibold text-primary flex items-center gap-2">
              {t("about.vision")}
            </h3>

            <p className="mt-4 text-black font-[600]">
              {t("about.vision_desc")}
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="w-full h-full items-center justify-center md:hidden flex">
                <Image
                  src="/images/vision.png"
                  alt="Vision"
                  width={150}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-2 flex flex-col gap-4 mt-4 text-gray-600 text-justify">
                <p className="flex items-start gap-2">
                  <TiTick className="text-primary mt-1" size={20} />
                  {t("about.vision_state_1")}
                </p>
                <p className="flex items-start gap-2">
                  <TiTick className="text-primary mt-1" size={20} />
                  {t("about.vision_state_2")}
                </p>
                <p className="flex items-start gap-2">
                  <TiTick className="text-primary mt-1" size={20} />
                  {t("about.vision_state_3")}
                </p>
              </div>
              <div className="w-full h-full items-center justify-center hidden md:flex">
                <Image
                  src="/images/vision.png"
                  alt="Vision"
                  width={150}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="px-4 md:px-10 py-8">
        <h2 className="text-[20px] md:text-3xl font-semibold text-gray-800 text-center">
          {t("history.title")}
        </h2>
        <div className="mt-6 flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/hospital_old.jpg"
              alt="Our History"
              width={300}
              height={300}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-gray-600 text-justify">
              {t("history.description")}
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <TiTick className="text-primary mr-2 mt-1" size={20} />
                <span className="text-gray-700">
                  {t("history.milestone_1")}
                </span>
              </li>
              <li className="flex items-start">
                <TiTick className="text-primary mr-2 mt-1" size={20} />
                <span className="text-gray-700">
                  {t("history.milestone_2")}
                </span>
              </li>
              <li className="flex items-start">
                <TiTick className="text-primary mr-2 mt-1" size={20} />
                <span className="text-gray-700">
                  {t("history.milestone_3")}
                </span>
              </li>
              <li className="flex items-start">
                <TiTick className="text-primary mr-2 mt-1" size={20} />
                <span className="text-gray-700">
                  {t("history.milestone_4")}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-100 px-4 md:px-10 py-8 flex flex-col items-center justify-center">
        <h2 className="text-[20px] md:text-3xl font-semibold text-gray-800 text-center">
          {t("about.core_values")}
        </h2>
        <div className="md:w-[80%] lg:w-[50%] mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center text-center">
            <Heart size={40} className="text-red-500" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.core_value_1")}
            </h3>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center text-center">
            <Award size={40} className="text-blue-500" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.core_value_2")}
            </h3>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center text-center">
            <Lightbulb size={40} className="text-yellow-500" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.core_value_3")}
            </h3>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center text-center">
            <Cross size={40} className="text-green-500" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.core_value_4")}
            </h3>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center text-center">
            <ShieldCheck size={40} className="text-indigo-500" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.core_value_5")}
            </h3>
          </div>
          <div className="p-4 bg-white shadow-md rounded-md flex flex-col items-center text-center">
            <Star size={40} className="text-purple-500" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.core_value_6")}
            </h3>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="px-4 md:px-10 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          {t("about.why_choose_us")}
        </h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 shadow-md rounded-md text-justify flex flex-col items-center">
            <UserCheck size={40} className="text-primary" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.experienced_doctors")}
            </h3>
            <p className="mt-2 text-gray-600">
              {t("about.experienced_doctors_desc")}
            </p>
          </div>
          <div className="p-4 bg-gray-50 shadow-md rounded-md text-justify flex flex-col items-center">
            <Hospital size={40} className="text-primary" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.modern_facilities")}
            </h3>
            <p className="mt-2 text-gray-600">
              {t("about.modern_facilities_desc")}
            </p>
          </div>
          <div className="p-4 bg-gray-50 shadow-md rounded-md text-justify flex flex-col items-center">
            <Microscope size={40} className="text-primary" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.advanced_technology")}
            </h3>
            <p className="mt-2 text-gray-600">
              {t("about.advanced_technology_desc")}
            </p>
          </div>
          <div className="p-4 bg-gray-50 shadow-md rounded-md text-justify flex flex-col items-center">
            <HeartPulse size={40} className="text-primary" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.comprehensive_care")}
            </h3>
            <p className="mt-2 text-gray-600">
              {t("about.comprehensive_care_desc")}
            </p>
          </div>
          <div className="p-4 bg-gray-50 shadow-md rounded-md text-justify flex flex-col items-center">
            <Smile size={40} className="text-primary" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.patient_satisfaction")}
            </h3>
            <p className="mt-2 text-gray-600">
              {t("about.patient_satisfaction_desc")}
            </p>
          </div>
          <div className="p-4 bg-gray-50 shadow-md rounded-md text-justify flex flex-col items-center">
            <LifeBuoy size={40} className="text-primary" />
            <h3 className="md:text-xl font-semibold mt-2 text-primary">
              {t("about.emergency_services")}
            </h3>
            <p className="mt-2 text-gray-600">
              {t("about.emergency_services_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Departments At a Glance */}
      <section className="py-8 bg-gray-100">
        <div className="px-4 md:px-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            {t("departments.title")}
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="w-full">
              <Image
                src="/images/departments.jpg"
                alt="Our History"
                width={300}
                height={300}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <ul className="mt-4 text-black grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-center">
              {departments.map(({ key, icon, href }) => (
                <Link
                  href={href}
                  key={key}
                  className="cursor-pointer transition-transform duration-300 hover:scale-105 p-2 md:p-4 bg-white shadow-md rounded-md bg-gradient-to-br from-teal-200 to-teal-400 flex flex-col items-center justify-center space-y-2"
                >
                  {icon}
                  <span className="font-semibold">
                    {t(`departments.${key}`)}
                  </span>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services At a Glance */}
      <section className="py-8">
        <div className="px-4 md:px-10">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            {t("about.services_glance")}
          </h2>
          <ul className="mt-4 text-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.emergency")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.cardiology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.neurology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.orthopedics")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.pediatrics")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.oncology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.gynecology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.dermatology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.urology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.radiology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.nephrology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.physiotherapy")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.endocrinology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.gastroenterology")}
            </li>
            <li className="p-4 bg-white shadow-md rounded-md">
              {t("services.hematology")}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
