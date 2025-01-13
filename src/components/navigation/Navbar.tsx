"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Nav = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const doctors = [
    t("nav.medicine"),
    t("nav.surgery"),
    t("nav.paediatric_surgery"),
    t("nav.burn_plastic_surgery"),
    t("nav.neurosurgery"),
    t("nav.cardiac_medicine"),
    t("nav.orthopedic"),
    t("nav.ent"),
    t("nav.cancer"),
    t("nav.psychiatry"),
    t("nav.gynae_obs"),
    t("nav.paediatric"),
    t("nav.kidney"),
    t("nav.medicine_kidney"),
    t("nav.neuromedicine"),
    t("nav.rheumatology"),
    t("nav.chest_medicine_heart"),
    t("nav.diabetes_hormone"),
    t("nav.physical_medicine"),
    t("nav.respiratory_medicine"),
    t("nav.liver_hepatology"),
    t("nav.urology"),
    t("nav.dental"),
    t("nav.skin_vd"),
  ];

  return (
    <div className="w-fit md:w-full">
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden text-primary" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <div
          className="absolute top-4 right-4 text-xl text-primary cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <FaTimes />
        </div>

        <nav className="md:hidden">
          <div className="px-4 mb-6">
            <Image
              src="/logo/logo.png"
              alt="Patiya General Hospital"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <ul className="flex flex-col gap-6 p-4">
            <li>
              <Link
                href="/"
                className={`text-[16px] font-[500] ${
                  isActive("/") ? "text-primary font-bold" : "text-black"
                } hover:text-primary`}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleDropdownToggle("about")}
                className="flex items-center gap-2 text-[16px] font-[500] hover:text-primary"
              >
                {t("nav.about")}{" "}
                {openDropdown === "about" ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              <ul
                className={`pl-4 transition-all duration-300 ${
                  openDropdown === "about" ? "block" : "hidden"
                }`}
              >
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  About Demo Hospital
                </li>
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  Our History
                </li>
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  From MD&apos;s Desk
                </li>
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  Mission & Vision
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => handleDropdownToggle("services")}
                className="flex items-center gap-2 text-[16px] font-[500] hover:text-primary"
              >
                {t("nav.service")}{" "}
                {openDropdown === "services" ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              <ul
                className={`pl-4 transition-all duration-300 ${
                  openDropdown === "services" ? "block" : "hidden"
                }`}
              >
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  Cardiology
                </li>
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  Neurology
                </li>
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  Diagnostic Center
                </li>
                <li className="py-2 hover:bg-primary hover:text-white cursor-pointer">
                  Orthopedics
                </li>
              </ul>
            </li>
            <li>
              <button
                onClick={() => handleDropdownToggle("doctors")}
                className="flex items-center gap-2 text-[16px] font-[500] hover:text-primary"
              >
                {t("nav.doctors")}{" "}
                {openDropdown === "doctors" ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              <ul
                className={`pl-4 transition-all duration-300 overflow-auto max-h-[400px] ${
                  openDropdown === "doctors" ? "block" : "hidden"
                }`}
              >
                {doctors.map((doctor, index) => (
                  <li
                    key={index}
                    className="py-2 hover:bg-primary hover:text-white cursor-pointer"
                  >
                    {doctor}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a
                href="/csr"
                className={`text-[16px] font-[500] ${
                  isActive("/csr") ? "text-primary font-bold" : "text-black"
                } hover:text-primary`}
              >
                {t("nav.csr")}
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className={`text-[16px] font-[500] ${
                  isActive("/faq") ? "text-primary font-bold" : "text-black"
                } hover:text-primary`}
              >
                {t("nav.faq")}
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`text-[16px] font-[500] ${
                  isActive("/contact") ? "text-primary font-bold" : "text-black"
                } hover:text-primary`}
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden md:flex shadow-md">
        <ul className="w-[50%] container mx-auto flex flex-row justify-between gap-6 pb-4">
          <li className="relative group">
            <Link
              href="/"
              className={`text-[16px] font-[500] ${
                isActive("/en") || isActive("/bn")
                  ? "text-primary font-bold"
                  : "text-black"
              } hover:text-primary`}
            >
              {t("nav.home")}
            </Link>
          </li>
          <li className="relative group">
            <button
              onClick={() => handleDropdownToggle("about")}
              className="flex items-center gap-2 text-[16px] font-[500] hover:text-primary"
            >
              {t("nav.about")}{" "}
              {openDropdown === "about" ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown />
              )}
            </button>
            <ul
              className={`z-20 w-[200px] absolute top-full left-0 bg-white border shadow-md mt-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdown === "about"
                  ? "opacity-100 translate-y-1"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                About Demo Hospital
              </li>
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                Our History
              </li>
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                From MD&apos;s Desk
              </li>
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                Mission & Vision
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button
              onClick={() => handleDropdownToggle("services")}
              className="flex items-center gap-2 text-[16px] font-[500] hover:text-primary"
            >
              {t("nav.service")}{" "}
              {openDropdown === "services" ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown />
              )}
            </button>
            <ul
              className={`z-20 w-[200px] absolute top-full left-0 bg-white border shadow-md mt-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdown === "services"
                  ? "opacity-100 translate-y-1"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                Cardiology
              </li>
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                Neurology
              </li>
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                Diagnostic Center
              </li>
              <li className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                Orthopedics
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button
              onClick={() => handleDropdownToggle("doctors")}
              className="flex items-center gap-2 text-[16px] font-[500] hover:text-primary"
            >
              {t("nav.doctors")}{" "}
              {openDropdown === "doctors" ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown />
              )}
            </button>
            <ul
              className={`z-20 h-auto w-[850px] absolute right-0 top-full bg-white border shadow-md mt-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdown === "doctors"
                  ? "opacity-100 translate-y-1"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-3 gap-2">
                {doctors.map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                  >
                    {category}
                  </li>
                ))}
              </div>
            </ul>
            
          </li>

          <li className="relative group">
            <a
              href="/csr"
              className={`text-[16px] font-[500] ${
                isActive("/en/csr") || isActive("/bn/csr")
                  ? "text-primary font-bold"
                  : "text-black"
              } hover:text-primary`}
            >
              {t("nav.csr")}
            </a>
          </li>
          <li className="relative group">
            <a
              href="/faq"
              className={`text-[16px] font-[500] ${
                isActive("/en/faq") || isActive("/bn/faq")
                  ? "text-primary font-bold"
                  : "text-black"
              } hover:text-primary`}
            >
              {t("nav.faq")}
            </a>
          </li>
          <li className="relative group">
            <a
              href="/contact"
              className={`text-[16px] font-[500] ${
                isActive("/en/contact") || isActive("/bn/contact")
                  ? "text-primary font-bold"
                  : "text-black"
              } hover:text-primary`}
            >
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
