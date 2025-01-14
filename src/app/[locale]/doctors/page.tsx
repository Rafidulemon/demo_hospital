"use client";
import React from "react";
import { useRouter } from "next/navigation";
import DoctorCard from "@/components/doctors/DoctorCard";

const doctors = [
    // Medicine
    {
      id: 1,
      imageSrc: "/images/doctors/1.jpg",
      name: "Dr. Alice Brown",
      specialty: "General Physician",
      degree: "MBBS, MD",
      designation: "Consultant",
      details: "Expert in treating chronic illnesses and general health issues.",
      schedule: "Mon - Sat (10:00 AM - 2:00 PM)",
      address: "123 Main Street, City",
      department: "Medicine",
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
      department: "Medicine",
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
      department: "Medicine",
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
      department: "Surgery",
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
      department: "Surgery",
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
      department: "Surgery",
    },
  
    // Pediatrics
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
      department: "Pediatrics",
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
      department: "Pediatrics",
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
      department: "Pediatrics",
    },
  
    // Cardiac Medicine
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
      department: "Cardiac Medicine",
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
      department: "Cardiac Medicine",
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
      department: "Cardiac Medicine",
    },
  
    // ENT
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
      department: "ENT",
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
      department: "ENT",
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
      department: "ENT",
    },
  
    // Skin and VD
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
      department: "Skin and VD",
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
      department: "Skin and VD",
    },
    {
      id: 18,
      imageSrc: "/images/doctors/6.jpg",
      name: "Dr. William Johnson",
      specialty: "Venereologist",
      degree: "MBBS, MD",
      designation: "Consultant",
      details: "Specialist in sexually transmitted diseases and skin disorders.",
      schedule: "Wed - Sun (11:00 AM - 2:00 PM)",
      address: "1515 Oak Drive, City",
      department: "Skin and VD",
    },
  ];

const DoctorsPage: React.FC = () => {
  const router = useRouter();

  // Extract unique departments
  const departments = Array.from(new Set(doctors.map((doc) => doc.department)));

  const handleDepartmentClick = (department: string) => {
    router.push(`/doctors/${department.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Doctors</h1>

      {/* Departments */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4 mb-12">
        {departments.map((department, index) => (
          <button
            key={index}
            className="px-2 py-1 md:py-2 md:px-4 bg-primary text-white rounded-lg shadow-md hover:bg-primary_light transition-all"
            onClick={() => handleDepartmentClick(department)}
          >
            {department}
          </button>
        ))}
      </div>

      {/* All Doctors */}
      <div className="w-full flex flex-col justify-center items-center grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            imageSrc={doctor.imageSrc}
            name={doctor.name}
            specialty={doctor.specialty}
            degree={doctor.degree}
            designation={doctor.designation}
            details={doctor.details}
            schedule={doctor.schedule}
            address={doctor.address}
          />
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
