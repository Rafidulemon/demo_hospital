"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import RadioGroup from "@/components/inputs/RadioGroup";
import TextInput from "@/components/inputs/TextInput";
import TextArea from "@/components/inputs/TextArea";
import Image from "next/image";
import { useTranslations } from "next-intl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactPage = () => {
  const t = useTranslations("contact");
  const [selectedValue, setSelectedValue] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleDoctorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDoctorName(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setAppointmentDate(date);
  };

  return (
    <div className="w-full flex flex-col items-center bg-gray-50">
      <div className="relative w-full h-[220px] md:h-[600px] mt-[100px] md:mt-[150px]">
        <Image
          src="/images/contact.jpg"
          alt="Contact"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white w-full text-center text-[24px] md:text-[48px] font-bold">
              {t("title")}
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="p-6 md:p-10 w-full grid grid-cols-3 gap-3 md:gap-8 mb-12">
        {/* Emergency Contact */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col justify-start md:justify-center items-center hover:bg-primary group hover:text-white">
          <div className="group-hover:text-white text-primary text-xl md:text-4xl mb-4">
            <FaPhoneAlt />
          </div>
          <h2 className="group-hover:text-white text-[16px] md:text-xl font-bold">
            {t("emergency.title")}
          </h2>
          <p className="hidden md:flex group-hover:text-white text-[12px] md:text-[16px] mt-2 text-gray-600">
            {t("emergency.subtitle")}
          </p>
          <p className="group-hover:text-white cursor-pointer mt-4 text-[12px] md:text-[16px] text-primary font-semibold hover:underline">
            {t("emergency.phone")}
          </p>
        </div>

        {/* Email Address */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col justify-start md:justify-center items-center hover:bg-primary group hover:text-white">
          <div className="group-hover:text-white text-primary text-xl md:text-4xl mb-4">
            <FaEnvelope />
          </div>
          <h2 className="group-hover:text-white text-[16px] md:text-xl font-bold">
            {t("email.title")}
          </h2>
          <p className="hidden md:flex group-hover:text-white mt-2 text-gray-600 text-[12px] md:text-[16px]">
            {t("email.subtitle")}
          </p>
          <p className="cursor-pointer group-hover:text-white mt-4 text-[12px] md:text-[16px] text-primary font-semibold hover:underline">
            {t("email.address")}
          </p>
        </div>

        {/* Hospital Address */}
        <div className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col justify-start md:justify-center items-center hover:bg-primary group hover:text-white">
          <div className="group-hover:text-white text-primary text-xl md:text-4xl mb-4">
            <FaMapMarkerAlt />
          </div>
          <h2 className="group-hover:text-white text-[16px] md:text-xl font-bold">
            {t("location.title")}
          </h2>
          <p className="hidden md:flex group-hover:text-white mt-2 text-gray-600 text-center text-[12px] md:text-[16px]">
            {t("location.address")}
          </p>
          <p className="cursor-pointer group-hover:text-white hover:underline mt-4 text-[12px] md:text-[16px] text-primary font-semibold text-center">
            {t("location.map")}
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="p-6 md:p-10 bg-white shadow-md rounded-lg p-10 w-full">
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-[125px] h-[250px] md:w-[300px] md:h-[600px]">
            <img
              src="/images/contact-image.jpg"
              alt={t("imageAlt")}
              className="w-full h-full"
            />
          </div>

          <form className="flex flex-col gap-4 w-full md:w-fit">
            {/* Name Field */}
            <TextInput
              label={t("form.name.label")}
              name="name"
              placeholder={t("form.name.placeholder")}
              isRequired
            />

            {/* Email Field */}
            <TextInput
              label={t("form.email.label")}
              name="email"
              placeholder={t("form.email.placeholder")}
              isRequired
            />

            {/* Phone Number Field */}
            <TextInput
              label={t("form.phone.label")}
              name="phone"
              placeholder={t("form.phone.placeholder")}
            />

            {/* Query Type */}
            <RadioGroup
              name="queryType"
              title={t("form.queryType.title")}
              options={[
                {
                  label: t("form.queryType.options.general"),
                  value: "general",
                },
                {
                  label: t("form.queryType.options.appointment"),
                  value: "appointment",
                },
                {
                  label: t("form.queryType.options.feedback"),
                  value: "feedback",
                },
              ]}
              selectedValue={selectedValue}
              onChange={handleRadioChange}
              isVertical
            />

            {/* Select Doctor & Date Picker */}
            {selectedValue === "appointment" ? (
              <div className="w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="doctor" className="text-black font-semibold">
                    {t("form.selectSpeciality.label")}
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={doctorName}
                    onChange={handleDoctorChange}
                    className="cursor-pointer bg-white rounded-[5px] drop-shadow-lg text-text_primary p-4 focus:outline-none mb-2"
                  >
                    <option value="">
                      {t("form.selectSpeciality.placeholder")}
                    </option>
                    <option value="Medicine">Medicine</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Pediatrician">Pediatrician</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <label htmlFor="doctor" className="text-black font-semibold">
                    {t("form.selectDoctor.label")}
                  </label>
                  <select
                    id="doctor"
                    name="doctor"
                    value={doctorName}
                    onChange={handleDoctorChange}
                    className="cursor-pointer bg-white rounded-[5px] drop-shadow-lg text-text_primary p-4 focus:outline-none mb-2"
                  >
                    <option value="">
                      {t("form.selectDoctor.placeholder")}
                    </option>
                    <option value="Dr. John Doe">Dr. John Doe</option>
                    <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                    <option value="Dr. Ahmed Khan">Dr. Ahmed Khan</option>
                  </select>
                </div>

                {/* Date Picker */}
                <div className="flex flex-col gap-2 mt-4">
                  <label
                    htmlFor="appointmentDate"
                    className="text-black font-semibold"
                  >
                    {t("form.appointmentDate.label")}
                  </label>
                  <DatePicker
                    id="appointmentDate"
                    selected={appointmentDate}
                    onChange={handleDateChange}
                    dateFormat="MMMM d, yyyy"
                    className="cursor-pointer w-full bg-white rounded-[5px] drop-shadow-lg text-text_primary p-4 focus:outline-none mb-2"
                    placeholderText={t("form.appointmentDate.placeholder")}
                  />
                </div>
              </div>
            ) : (
              <TextArea
                label={t("form.message.label")}
                name="message"
                placeholder={t("form.message.placeholder")}
                isRequired
              />
            )}
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
            >
              {t("form.submitButton")}
            </button>
          </form>
        </div>
      </div>

      <div className="p-6 md:p-10 w-full mt-12">
        <h2 className="text-xl font-bold mb-4 text-primary">
          {t("map.title")}
        </h2>
        <iframe
          src={t("map.src")}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactPage;
