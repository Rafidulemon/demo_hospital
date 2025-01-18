"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import DoctorCard from "../doctors/DoctorCard";

const Doctors = () => {
  const router = useRouter();
  const t = useTranslations();

  const doctors = [
    {
      id: 1,
      imageSrc: "/images/doctors/1.jpg",
      name: "Dr. Alice Brown",
      specialties: [
        "General Physician",
        "Preventive Medicine",
        "Chronic Illness Management",
        "Health Counseling",
        "Infectious Disease Treatment",
        "Diabetes Management",
        "Hypertension Management",
        "Women's Health",
        "Respiratory Diseases",
        "Nutritional Guidance",
      ],
      degree: "MBBS, MD",
      designation: "Consultant",
      details:
        "Expert in treating chronic illnesses and general health issues.",
      schedule: "Mon - Sat (10:00 AM - 2:00 PM)",
      address: "123 Main Street, City",
      department: t("nav.medicine"),
    },
    {
      id: 2,
      imageSrc: "/images/doctors/2.jpg",
      name: "Dr. Mark Green",
      specialties: [
        "Internal Medicine",
        "Cardiovascular Diseases",
        "Endocrinology",
        "Gastroenterology",
        "Pulmonology",
        "Rheumatology",
        "Chronic Disease Management",
        "Infectious Diseases",
        "Geriatric Care",
        "Neurological Disorders",
      ],
      degree: "MBBS, MD",
      designation: "Senior Consultant",
      details: "Specialist in internal medicine and complex diseases.",
      schedule: "Mon - Fri (9:00 AM - 1:00 PM)",
      address: "456 Oak Avenue, City",
      department: t("nav.medicine"),
    },
    {
      id: 3,
      imageSrc: "/images/doctors/3.jpg",
      name: "Dr. Sarah Lee",
      specialties: [
        "Family Medicine",
        "Pediatric Care",
        "Chronic Disease Management",
        "Women's Health",
        "Adolescent Health",
        "Geriatric Care",
        "Preventive Medicine",
        "Lifestyle Medicine",
        "Mental Health Support",
        "Dermatological Care",
      ],
      degree: "MBBS, DFM",
      designation: "Consultant",
      details: "Provides comprehensive care for patients of all ages.",
      schedule: "Mon - Sat (11:00 AM - 3:00 PM)",
      address: "789 Elm Street, City",
      department: t("nav.gynae_obs"),
    },
    {
      id: 4,
      imageSrc: "/images/doctors/4.jpg",
      name: "Dr. John Smith",
      specialties: [
        "General Surgery",
        "Laparoscopic Surgery",
        "Trauma Surgery",
        "Oncological Surgery",
        "Abdominal Surgery",
        "Hernia Repairs",
        "Endocrine Surgery",
        "Colorectal Surgery",
        "Emergency Surgeries",
        "Minimally Invasive Procedures",
      ],
      degree: "MBBS, MS",
      designation: "Consultant Surgeon",
      details: "Expert in general and laparoscopic surgeries.",
      schedule: "Mon - Fri (10:00 AM - 1:00 PM)",
      address: "101 Maple Lane, City",
      department: t("nav.surgery"),
    },
    {
      id: 5,
      imageSrc: "/images/doctors/5.jpg",
      name: "Dr. Linda Wilson",
      specialties: [
        "Orthopedic Surgery",
        "Joint Replacements",
        "Sports Injuries",
        "Arthroscopy",
        "Spinal Surgery",
        "Trauma Care",
        "Bone Tumor Treatment",
        "Fracture Management",
        "Pediatric Orthopedics",
        "Minimally Invasive Orthopedic Surgery",
      ],
      degree: "MBBS, MS (Ortho)",
      designation: "Senior Surgeon",
      details: "Specialist in bone and joint surgeries.",
      schedule: "Tue - Sat (9:00 AM - 12:00 PM)",
      address: "202 Pine Road, City",
      department: t("nav.surgery"),
    },
    {
      id: 6,
      imageSrc: "/images/doctors/6.jpg",
      name: "Dr. Michael Davis",
      specialties: [
        "Neurosurgery",
        "Brain Tumor Surgery",
        "Spinal Cord Surgeries",
        "Cerebrovascular Surgeries",
        "Traumatic Brain Injury Treatment",
        "Neuro-Oncology",
        "Pediatric Neurosurgery",
        "Epilepsy Surgery",
        "Minimally Invasive Neurosurgery",
        "Complex Spine Surgeries",
      ],
      degree: "MBBS, MCh (Neuro)",
      designation: "Consultant",
      details: "Specializes in brain and spinal surgeries.",
      schedule: "Wed - Sun (2:00 PM - 5:00 PM)",
      address: "303 Birch Street, City",
      department: t("nav.surgery"),
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[62%] gap-6 px-6 md:px-0 py-4 md:py-6 items-center">
        <h1 className="text-[20px] md:text-[32px] font-bold text-center md:text-left">
          {t("home.home_doctors.title")}
        </h1>
        <p className="text-[16px] md:text-[24px] font-semibold text-gray-600 text-center md:text-left mt-2 mb-4 md:mb-6">
        {t("home.home_doctors.subtitle")}
        </p>
        <div className="md:grid grid-cols-3 gap-6 justify-center md:justify-start">
          {doctors.map((doctor) => (
            <div
              className="w-full flex flex-row justify-center"
              key={doctor.id}
            >
              <DoctorCard
                key={doctor.id}
                imageSrc={doctor.imageSrc}
                name={doctor.name}
                specialty={doctor.department}
                degree={doctor.degree}
                designation={doctor.designation}
                details={doctor.details}
                schedule={doctor.schedule}
                address={doctor.address}
              />
            </div>
          ))}
        </div>
        <div
          className="bg-primary md:bg-white text-white py-2 md:py-0 md:text-primary w-full flex flex-row justify-center my-6 hover:text-primary"       
        >
          <span className="cursor-pointer" onClick={() => router.push("/doctors")}>{t("home.home_doctors.all")}</span>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
