"use client";
import React, { useEffect, useState } from "react";
import DoctorCard from "@/components/doctors/DoctorCard";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DoctorsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const t = useTranslations();
  const router = useRouter();

  const [selectedDepartment, setSelectedDepartment] = useState<string>(
    categoryParam || "All"
  );

  const doctors = [
    {
      id: 1,
      imageSrc: "/images/doctors/1.jpg",
      name: "Dr. Alice Brown",
      specialty: "General Physician",
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
      specialty: "Internal Medicine",
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
      specialty: "Family Physician",
      degree: "MBBS, DFM",
      designation: "Consultant",
      details: "Provides comprehensive care for patients of all ages.",
      schedule: "Mon - Sat (11:00 AM - 3:00 PM)",
      address: "789 Elm Street, City",
      department: t("nav.gynae_obs"),
    },

    // Surgery
    {
      id: 4,
      imageSrc: "/images/doctors/4.jpg",
      name: "Dr. John Smith",
      specialty: "General Surgeon",
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
      specialty: "Orthopedic Surgeon",
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
      specialty: "Neurosurgeon",
      degree: "MBBS, MCh (Neuro)",
      designation: "Consultant",
      details: "Specializes in brain and spinal surgeries.",
      schedule: "Wed - Sun (2:00 PM - 5:00 PM)",
      address: "303 Birch Street, City",
      department: t("nav.surgery"),
    },
    {
      id: 7,
      imageSrc: "/images/doctors/4.jpg",
      name: "Dr. Emma Brown",
      specialty: "Pediatrician",
      degree: "MBBS, DCH",
      designation: "Consultant",
      details: "Specialist in child healthcare and development.",
      schedule: "Mon - Sat (8:00 AM - 11:00 AM)",
      address: "404 Spruce Avenue, City",
      department: t("nav.paediatric_surgery"),
    },
    {
      id: 8,
      imageSrc: "/images/doctors/5.jpg",
      name: "Dr. Olivia Johnson",
      specialty: "Neonatologist",
      degree: "MBBS, MD (Pediatrics)",
      designation: "Senior Consultant",
      details: "Specializes in care for newborns and preterm babies.",
      schedule: "Mon - Fri (12:00 PM - 3:00 PM)",
      address: "505 Cedar Boulevard, City",
      department: t("nav.paediatric_surgery"),
    },
    {
      id: 9,
      imageSrc: "/images/doctors/3.jpg",
      name: "Dr. Ethan Williams",
      specialty: "Pediatric Surgeon",
      degree: "MBBS, MCh (Pediatrics)",
      designation: "Consultant Surgeon",
      details: "Expert in pediatric surgeries and congenital anomalies.",
      schedule: "Tue - Sat (2:00 PM - 5:00 PM)",
      address: "606 Walnut Lane, City",
      department: t("nav.paediatric_surgery"),
    },

    {
      id: 10,
      imageSrc: "/images/doctors/1.jpg",
      name: "Dr. Thomas Miller",
      specialty: "Cardiologist",
      degree: "MBBS, MD (Cardiology)",
      designation: "Senior Consultant",
      details: "Specializes in heart health and cardiac diagnostics.",
      schedule: "Mon - Fri (10:00 AM - 1:00 PM)",
      address: "707 Willow Road, City",
      department: t("nav.cardiac_medicine"),
    },
    {
      id: 11,
      imageSrc: "/images/doctors/2.jpg",
      name: "Dr. Isabella Martinez",
      specialty: "Interventional Cardiologist",
      degree: "MBBS, DM (Cardiology)",
      designation: "Consultant",
      details: "Expert in minimally invasive cardiac procedures.",
      schedule: "Wed - Sat (11:00 AM - 2:00 PM)",
      address: "808 Ash Street, City",
      department: t("nav.cardiac_medicine"),
    },
    {
      id: 12,
      imageSrc: "/images/doctors/3.jpg",
      name: "Dr. James Taylor",
      specialty: "Electrophysiologist",
      degree: "MBBS, MD (Cardiology)",
      designation: "Consultant",
      details: "Specialist in cardiac rhythm disorders.",
      schedule: "Tue - Sat (9:00 AM - 12:00 PM)",
      address: "909 Chestnut Avenue, City",
      department: t("nav.cardiac_medicine"),
    },
    {
      id: 13,
      imageSrc: "/images/doctors/1.jpg",
      name: "Dr. David Walker",
      specialty: "ENT Specialist",
      degree: "MBBS, MS (ENT)",
      designation: "Consultant",
      details: "Expert in ear, nose, and throat treatments.",
      schedule: "Mon - Fri (10:00 AM - 1:00 PM)",
      address: "1010 Acorn Drive, City",
      department: t("nav.ent"),
    },
    {
      id: 14,
      imageSrc: "/images/doctors/2.jpg",
      name: "Dr. Emily Harris",
      specialty: "Otologist",
      degree: "MBBS, DLO",
      designation: "Consultant",
      details: "Specialist in hearing and balance disorders.",
      schedule: "Tue - Sat (9:00 AM - 12:00 PM)",
      address: "1111 Maple Avenue, City",
      department: t("nav.ent"),
    },
    {
      id: 15,
      imageSrc: "/images/doctors/3.jpg",
      name: "Dr. Lucas White",
      specialty: "Rhinologist",
      degree: "MBBS, MS (ENT)",
      designation: "Consultant",
      details: "Specializes in nasal and sinus disorders.",
      schedule: "Wed - Sun (11:00 AM - 2:00 PM)",
      address: "1212 Willow Lane, City",
      department: t("nav.cancer"),
    },
    {
      id: 16,
      imageSrc: "/images/doctors/1.jpg",
      name: "Dr. Chloe Moore",
      specialty: "Dermatologist",
      degree: "MBBS, MD (Dermatology)",
      designation: "Consultant",
      details: "Specialist in skin diseases and cosmetic procedures.",
      schedule: "Mon - Fri (10:00 AM - 1:00 PM)",
      address: "1313 Pine Lane, City",
      department: t("nav.skin_vd"),
    },
    {
      id: 17,
      imageSrc: "/images/doctors/2.jpg",
      name: "Dr. Ava Thomas",
      specialty: "Cosmetic Dermatologist",
      degree: "MBBS, MD",
      designation: "Consultant",
      details: "Expert in aesthetic treatments and skin rejuvenation.",
      schedule: "Tue - Sat (9:00 AM - 12:00 PM)",
      address: "1414 Cedar Road, City",
      department: t("nav.skin_vd"),
    },
    {
      id: 18,
      imageSrc: "/images/doctors/6.jpg",
      name: "Dr. William Johnson",
      specialty: "Venereologist",
      degree: "MBBS, MD",
      designation: "Consultant",
      details:
        "Specialist in sexually transmitted diseases and skin disorders.",
      schedule: "Wed - Sun (11:00 AM - 2:00 PM)",
      address: "1515 Birch Avenue, City",
      department: t("nav.skin_vd"),
    },
  ];

  const allDepartments = [
    "Medicine",
    "Surgery",
    "PaediatricSurgery",
    "BurnPlasticSurgery",
    "Neurosurgery",
    "CardiacMedicine",
    "Orthopedic",
    "ENT",
    "Cancer",
    "Psychiatry",
    "GynaeObs",
    "Paediatric",
    "Kidney",
    "MedicineKidney",
    "Neuromedicine",
    "Rheumatology",
    "ChestMedicineHeart",
    "DiabetesHormone",
    "PhysicalMedicine",
    "RespiratoryMedicine",
    "LiverHepatology",
    "Urology",
    "Dental",
    "SkinVD",
    "Cardiology",
    "Orthopedics",
  ];

  const departmentTranslationMap: { [key: string]: string } = {
    Medicine: t("nav.medicine"),
    Surgery: t("nav.surgery"),
    PaediatricSurgery: t("nav.paediatric_surgery"),
    BurnPlasticSurgery: t("nav.burn_plastic_surgery"),
    Neurosurgery: t("nav.neurosurgery"),
    CardiacMedicine: t("nav.cardiac_medicine"),
    Orthopedic: t("nav.orthopedic"),
    ENT: t("nav.ent"),
    Cancer: t("nav.cancer"),
    Psychiatry: t("nav.psychiatry"),
    GynaeObs: t("nav.gynae_obs"),
    Paediatric: t("nav.paediatric"),
    Kidney: t("nav.kidney"),
    MedicineKidney: t("nav.medicine_kidney"),
    Neuromedicine: t("nav.neuromedicine"),
    Rheumatology: t("nav.rheumatology"),
    ChestMedicineHeart: t("nav.chest_medicine_heart"),
    DiabetesHormone: t("nav.diabetes_hormone"),
    PhysicalMedicine: t("nav.physical_medicine"),
    RespiratoryMedicine: t("nav.respiratory_medicine"),
    LiverHepatology: t("nav.liver_hepatology"),
    Urology: t("nav.urology"),
    Dental: t("nav.dental"),
    SkinVD: t("nav.skin_vd"),
    Cardiology: t("nav.cardiology"),
    Orthopedics: t("nav.orthopedics"),
    Obstetrics: t("nav.obstetrics"),
  };

  const categories = allDepartments.map(
    (department) => departmentTranslationMap[department] || department
  );
  console.log(categories)

  const filteredDoctors =
    selectedDepartment === "All"
      ? doctors
      : doctors.filter((doc) => doc.department === selectedDepartment);

  const handleDepartmentClick = (department: string) => {
    setSelectedDepartment(department);
    console.log(department);
    if (department === "All") {
      router.push("/doctors");
    } else {
      router.push(`doctors?category=${department}`);
      router.replace(`/doctors`);
    }
  };

  useEffect(() => {
    if (categoryParam) {
      setSelectedDepartment(categoryParam);
    }
  }, [categoryParam]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="relative w-full h-[220px] md:h-[600px]">
        <Image
          src="/images/doctors/doctors.jpg"
          alt="Our Doctors"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[24px] md:text-[48px] font-bold">Our Expert Doctors</h1>
        </div>
      </div>

      <div className="p-6 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mb-12">
        <button
          className={`px-2 py-1 md:py-2 md:px-4 rounded-lg shadow-md transition-all ${
            selectedDepartment === "All"
              ? "bg-primary text-white"
              : "bg-gray-200 hover:bg-primary_light hover:text-white"
          }`}
          onClick={() => handleDepartmentClick("All")}
        >
          {t("nav.all")}
        </button>

        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-2 py-1 md:py-2 md:px-4 rounded-lg shadow-md transition-all ${
              selectedDepartment === category
                ? "bg-primary text-white"
                : "bg-gray-200 hover:bg-primary_light hover:text-white"
            }`}
            onClick={() => handleDepartmentClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="p-6 w-full flex flex-col justify-center items-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div className="w-full flex flex-row justify-center" key={doctor.id}>
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
          ))
        ) : (
          <div className="text-xl text-gray-500 flex flex-col col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 min-h-[400px] justify-center text-center">
            <span className="w-full">{t("doctors.no_data")}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsPage;
