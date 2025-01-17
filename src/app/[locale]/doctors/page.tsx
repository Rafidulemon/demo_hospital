"use client";
import React, { useEffect, useState } from "react";
import DoctorCard from "@/components/doctors/DoctorCard";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { DetailsModal } from "@/components/doctors/DoctorDetails";
import Button from "@/components/buttons/Butotn";

const DoctorsPage: React.FC = () => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const t = useTranslations();
  const router = useRouter();

  const [selectedDepartment, setSelectedDepartment] = useState<string>(
    categoryParam || "All"
  );
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState({
    imageSrc: "",
    name: "",
    specialty: "",
    degree: "",
    designation: "",
    details: "",
    schedule: "",
    address: "",
    department: "",
    specialties: [],
  });

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
    {
      id: 7,
      imageSrc: "/images/doctors/4.jpg",
      name: "Dr. Emma Brown",
      specialties: [
        "Pediatrics",
        "Vaccination Programs",
        "Growth and Development Assessment",
        "Infectious Diseases in Children",
        "Adolescent Health",
        "Pediatric Nutrition",
        "Chronic Illnesses in Children",
        "Behavioral Disorders",
        "Pediatric Dermatology",
        "Emergency Pediatric Care",
      ],
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
      specialties: [
        "Neonatology",
        "Premature Baby Care",
        "NICU Management",
        "Neonatal Respiratory Support",
        "Jaundice Treatment in Newborns",
        "Birth Defect Management",
        "Neonatal Nutrition",
        "Congenital Infections",
        "High-Risk Neonatology",
        "Neonatal Neurology",
      ],
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
      specialties: [
        "Pediatric Surgery",
        "Congenital Anomalies",
        "Neonatal Surgeries",
        "Hernia Repairs in Children",
        "Tumor Surgeries in Pediatrics",
        "Emergency Pediatric Surgeries",
        "Minimally Invasive Pediatric Surgery",
        "Gastrointestinal Pediatric Surgeries",
        "Urological Surgeries in Children",
        "Airway and Lung Surgeries",
      ],
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
      specialties: [
        "Cardiology",
        "Heart Disease Prevention",
        "Hypertension Treatment",
        "Arrhythmia Management",
        "Cardiac Imaging",
        "Interventional Cardiology",
        "Heart Failure Management",
        "Post-Heart Surgery Care",
        "Preventive Cardiology",
        "Cholesterol Management",
      ],
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
      specialties: [
        "Interventional Cardiology",
        "Angioplasty",
        "Stent Placements",
        "Heart Failure Treatment",
        "Pacemaker Implantation",
        "Peripheral Artery Disease Management",
        "Cholesterol Management",
        "Hypertension Control",
        "Cardiac Catheterization",
        "Valve Repair",
      ],
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
      specialties: [
        "Electrophysiology",
        "Cardiac Rhythm Disorders",
        "Atrial Fibrillation Treatment",
        "Pacemaker Implantation",
        "Defibrillator Implantation",
        "Arrhythmia Management",
        "Heart Block Treatment",
        "Syncope Diagnosis",
        "Electrocardiography",
        "Tachycardia Treatment",
      ],
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
      specialties: [
        "ENT Surgery",
        "Sinus Surgery",
        "Tonsillectomy",
        "Hearing Loss Treatment",
        "Speech Disorders",
        "Allergy Management",
        "Thyroid Surgery",
        "Head and Neck Cancer Treatment",
        "Voice Therapy",
        "Vertigo Treatment",
      ],
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
      specialties: [
        "Otology",
        "Hearing Disorders",
        "Tinnitus Management",
        "Cochlear Implant Surgery",
        "Ear Infections",
        "Balance Disorders",
        "Otosclerosis Treatment",
        "Eustachian Tube Dysfunction",
        "Pediatric ENT Disorders",
        "Ear Drum Perforation Treatment",
      ],
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
      specialties: [
        "Rhinology",
        "Chronic Sinusitis Treatment",
        "Nasal Polyp Removal",
        "Deviated Septum Surgery",
        "Nasal Trauma Repair",
        "Endoscopic Sinus Surgery",
        "Smell Disorders",
        "Allergic Rhinitis",
        "Nasal Tumor Treatment",
        "Airway Reconstruction",
      ],
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
      specialties: [
        "General Dermatology",
        "Cosmetic Dermatology",
        "Acne Treatment",
        "Eczema Management",
        "Psoriasis Treatment",
        "Skin Cancer Diagnosis",
        "Mole Removal",
        "Botox Procedures",
        "Laser Skin Treatments",
        "Hair and Nail Disorders",
      ],
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
      specialties: [
        "Cosmetic Dermatology",
        "Anti-Aging Treatments",
        "Chemical Peels",
        "Laser Hair Removal",
        "Scar Revision",
        "Stretch Mark Treatments",
        "Skin Rejuvenation",
        "Facial Contouring",
        "Hyperpigmentation Treatment",
        "Dermal Fillers",
      ],
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
      specialties: [
        "Venereology",
        "Sexually Transmitted Diseases",
        "HIV Management",
        "Genital Skin Disorders",
        "HPV Treatment",
        "Syphilis Diagnosis",
        "Chronic Urethritis",
        "Genital Lesions",
        "Herpes Treatment",
        "Preventive Sexual Health Counseling",
      ],
      degree: "MBBS, MD",
      designation: "Consultant",
      details:
        "Specialist in sexually transmitted diseases and skin disorders.",
      schedule: "Wed - Sun (11:00 AM - 2:00 PM)",
      address: "1515 Birch Avenue, City",
      department: t("nav.skin_vd"),
    },
    {
      id: 19,
      imageSrc: "/images/doctors/1.jpg",
      name: "Dr. Richard Brown",
      specialties: [
        "General Medicine",
        "Diabetes Care",
        "Hypertension Control",
        "Infectious Diseases",
        "Lifestyle Medicine",
        "Nutritional Therapy",
        "Weight Management",
        "Asthma Management",
        "Preventive Health Checkups",
        "Vaccination Programs",
      ],
      degree: "MBBS, MD",
      designation: "Consultant",
      details: "Focuses on comprehensive and preventive healthcare.",
      schedule: "Mon - Sat (9:00 AM - 12:00 PM)",
      address: "1616 Maple Drive, City",
      department: t("nav.medicine"),
    },
    {
      id: 20,
      imageSrc: "/images/doctors/2.jpg",
      name: "Dr. Sophia Wilson",
      specialties: [
        "Gynecology",
        "High-Risk Pregnancy",
        "Infertility Treatment",
        "Menstrual Disorders",
        "PCOS Management",
        "Pelvic Pain Diagnosis",
        "Gynecological Surgeries",
        "Contraceptive Counseling",
        "Menopause Management",
        "Uterine Fibroid Treatment",
      ],
      degree: "MBBS, MD (Gynecology)",
      designation: "Senior Consultant",
      details: "Expert in women's health and reproductive care.",
      schedule: "Mon - Fri (10:00 AM - 1:00 PM)",
      address: "1717 Cedar Lane, City",
      department: t("nav.gynae_obs"),
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

  const filteredDoctors =
    selectedDepartment === "All"
      ? doctors
      : doctors.filter((doc) => doc.department === selectedDepartment);

  const handleDepartmentClick = (department: string) => {
    setSelectedDepartment(department);
    if (department === "All") {
      router.push("/doctors");
    } else {
      router.push(`doctors?category=${department}`);
      router.replace(`/doctors`);
    }
  };

  const handleDoctorClick = (doctor: any) => {
    setSelectedDoctor(doctor);
    console.log(doctor);
    setIsDetailsModalOpen(true);
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
          <div className="text-white w-full text-center text-[24px] md:text-[48px] font-bold">
            {t("doctors.title")}
          </div>
        </div>
      </div>

      <div className="p-4 md:p-6 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mb-12">
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

      <div className="p-4 md:p-6 w-full flex flex-col justify-center items-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              className="w-full flex flex-row justify-center"
              key={doctor.id}
              onClick={() => handleDoctorClick(doctor)}
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
          ))
        ) : (
          <div className="text-xl text-gray-500 flex flex-col col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 min-h-[400px] justify-center text-center">
            <span className="w-full">{t("doctors.no_data")}</span>
          </div>
        )}
      </div>
      <DetailsModal
        open={isDetailsModalOpen}
        setOpen={setIsDetailsModalOpen}
        className="w-full h-screen overflow-y-auto"
      >
        {selectedDoctor && (
          <div className="w-full h-full flex flex-col justify-center items-center text-white p-4 md:p-8">
            <div className="w-full md:w-[80%] lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Doctor's Image */}
              <div className="flex justify-center items-center">
                <Image
                  src={selectedDoctor.imageSrc}
                  alt={selectedDoctor.name}
                  width={300}
                  height={300}
                  className="object-cover w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full"
                />
              </div>

              {/* Doctor's Information */}
              <div className="flex flex-col justify-start items-start">
                <span className="text-[24px] md:text-[30px] lg:text-[40px] font-semibold">
                  {selectedDoctor.name}
                </span>
                <span className="text-[20px] md:text-[24px] lg:text-[30px] font-[500]">
                  {selectedDoctor.degree}
                </span>
                <span className="text-[18px] md:text-[22px] lg:text-[24px] font-[500] mt-4">
                  {selectedDoctor.designation}
                </span>
                <span className="text-[18px] md:text-[22px] lg:text-[24px] font-[500]">
                  {selectedDoctor.department}
                </span>
                <span className="text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] font-[500] mt-4">
                  {selectedDoctor.details}
                </span>
                <span className="text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
                  Time: {selectedDoctor.schedule}
                </span>
                <span className="text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
                  Location: {selectedDoctor.address}
                </span>
                <span className="text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
                  Serial: Call our hotline
                </span>

                {/* Specialties */}
                <span className="text-gray-200 text-[18px] md:text-[22px] lg:text-[30px] font-[500] mt-6">
                  Specialities:
                </span>
                <span className="text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] font-[500]">
                  {selectedDoctor.specialties?.length > 0
                    ? selectedDoctor.specialties.map((speciality, index) => (
                        <span key={index}>
                          {speciality}
                          {index < selectedDoctor.specialties.length - 1
                            ? ", "
                            : ""}
                        </span>
                      ))
                    : "No specialities available"}
                </span>

                {/* Book Appointment Button */}
                <div
                  onClick={() => setIsDetailsModalOpen(false)}
                  className="bg-white text-primary rounded-lg shadow-xl px-4 py-2 cursor-pointer mt-6 text-[16px] md:text-[18px] lg:text-[20px]"
                >
                  Book an Appointment
                </div>
              </div>
            </div>
          </div>
        )}
      </DetailsModal>
    </div>
  );
};

export default DoctorsPage;
