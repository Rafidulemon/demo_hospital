import Link from "next/link";
import React, { useState } from "react";
import { FaTimes, FaChevronUp, FaChevronDown, FaBars } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownItems: {
    about: string[];
    services: string[];
    doctors: string[];
  } = {
    about: [
      t("nav.about_demo"),
      t("nav.history"),
      t("nav.md"),
      t("nav.mission"),
    ],
    services: [
      t("nav.cardiology"),
      t("nav.neurology"),
      t("nav.diagnostic"),
      t("nav.orthopedics"),
      t("nav.pediatrics"),
      t("nav.gynecology"),
      t("nav.obstetrics"),
    ],
    doctors: [
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
    ],
  };

  type DropdownKey = keyof typeof dropdownItems;

  const navItems: {
    label: string;
    href?: string;
    dropdown?: DropdownKey;
  }[] = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), dropdown: "about" },
    { label: t("nav.service"), dropdown: "services" },
    { label: t("nav.doctors"), dropdown: "doctors" },
    { label: t("nav.faq"), href: "/faq" },
    { label: t("nav.csr"), href: "/csr" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleDropdownToggle = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="md:hidden text-primary" onClick={toggleMobileMenu}>
        <FaBars />
      </div>

      <div
        className={`fixed top-0 right-0 w-[250px] h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div
          className="absolute top-4 right-4 text-xl text-primary cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <FaTimes />
        </div>

        <nav className="md:hidden">
          <div className="px-4 mb-2">
            <Image
              src="/logo/logo.png"
              alt="Patiya General Hospital"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <ul className="flex flex-col gap-6 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`text-[16px] font-[500] ${
                      isActive(item.href)
                        ? "text-primary font-bold"
                        : "text-black"
                    } hover:text-primary`}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      
                      className="flex items-center gap-2 text-[16px] font-[500] hover:text-primary"
                    >
                      {item.label}{" "}
                      {openDropdown === item.dropdown ? (
                        <FaChevronUp className="text-primary" onClick={() => handleDropdownToggle(item.dropdown!)}/>
                      ) : (
                        <FaChevronDown onClick={() => handleDropdownToggle(item.dropdown!)}/>
                      )}
                    </button>
                    <ul
                      className={`pl-4 pr-1 transition-all duration-300 bg-gray-100 max-h-[250px] overflow-y-auto ${
                        openDropdown === item.dropdown ? "block" : "hidden"
                      }`}
                    >
                      {dropdownItems[item.dropdown!]?.map((subItem, idx) => (
                        <li
                          key={idx}
                          className="py-2 hover:bg-primary hover:text-white cursor-pointer"
                        >
                          <Link
                            href={`/doctors?category=${encodeURIComponent(
                              subItem
                            )}`}
                            onClick={toggleMobileMenu}
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
