"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaBook, FaStethoscope  } from "react-icons/fa";

type DoctorCardProps = {
  imageSrc: string;
  name: string;
  specialty: string;
  degree: string;
  designation: string;
  details: string;
  schedule: string;
  address?: string;
};

const DoctorCard: React.FC<DoctorCardProps> = ({
  imageSrc,
  name,
  specialty,
  degree,
  designation,
  details,
  schedule,
  address,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer w-[300px] md:w-[350px] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center relative md:transition-all md:duration-300 ease-in-out md:transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Doctor Image */}
      <div className="relative w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex justify-center items-center">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          className="object-cover rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
      </div>

      <div className="w-full text-center py-2">
        <h3 className="text-xl font-semibold mb-2 text-primary pt-4">{name}</h3>
        <h4 className="text-md mb-1 text-primary_light">{specialty}</h4>
        {address && (
          <h4 className="text-md flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-primary_light" />
            {address}
          </h4>
        )}

        <div className="w-full my-2 border-t border-gray-500 border-dashed" />
        <p className="text-md pb-2">{schedule}</p>

        <div className="md:hidden w-full my-2 border-t border-gray-500 border-dashed" />

        <div className="md:hidden w-full h-full bg-primaryflex flex-col items-center justify-center">
            <div className="text-sm p-4 transform scale-95 hover:scale-100 transition-transform duration-500 ease-in-out">
              <p className="text-[20px] font-bold mb-4">{name}</p>
              <p className="font-semibold">{degree}</p>
              <p className="italic">{designation}</p>
              <p className="mt-1">{details}</p>
            </div>

            <div className="w-full flex justify-center items-center text-primary text-md gap-2">
              <FaBook />
              <span>Book an Appointment</span>
            </div>
          </div>

        {/* Hover Content */}
        {isHovered && (
          <div className="hidden w-full h-full bg-primary absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out md:flex flex-col items-center justify-center">
            <FaStethoscope className="text-white text-[60px]"/>
            <div className="text-sm text-white p-4 transform scale-95 hover:scale-100 transition-transform duration-500 ease-in-out">
              <p className="text-[20px] font-bold mb-4">{name}</p>
              <p className="font-semibold">{degree}</p>
              <p className="italic">{designation}</p>
              <p className="mt-1">{details}</p>
            </div>

            <div className="w-fit fixed bottom-4 flex justify-center items-center text-white text-2xl gap-2 hover:text-primary hover:bg-white hover:border-2 hover:border-primary hover:rounded-xl p-2 transition-all duration-300 ease-in-out transform hover:scale-110">
              <FaBook />
              <span>Book an Appointment</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
