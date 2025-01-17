import Link from "next/link";
import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    href: string;
    en_href: string;
    bn_href: string;
    dropdown?: DropdownKey;
  }[] = [
    { label: t("nav.home"), href:"/", en_href: "/en", bn_href: "/bn" },
    { label: t("nav.about"), href:"/about", en_href: "/en/about", bn_href: "/bn/about", dropdown: "about" },
    { label: t("nav.service"), href:"/services", en_href: "/en/services", bn_href: "/bn/services", dropdown: "services" },
    { label: t("nav.doctors"), href:"/doctors", en_href: "/en/doctors", bn_href: "/bn/doctors", dropdown: "doctors" },
    { label: t("nav.faq"), href:"/faq", en_href: "/en/faq", bn_href: "/bn/faq" },
    { label: t("nav.csr"), href:"/csr", en_href: "/en/csr", bn_href: "/bn/csr" },
    { label: t("nav.contact"), href:"/contact", en_href: "/en/contact", bn_href: "/bn/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  const handleDropdownToggle = (menu: DropdownKey) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleMouseEnter = (menu: DropdownKey) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = (menu: DropdownKey) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    }
  };

  return (
    <nav className="hidden md:flex shadow-md">
      <ul className="w-[50%] container mx-auto flex flex-row justify-between gap-6 pb-4">
        {navItems.map((item, index) => (
          <li key={index} className="relative group">
            <div className="flex items-center gap-2">
              <Link
                href={item.href}
                className={`text-[16px] font-[500] ${
                  isActive(item.en_href) || isActive(item.bn_href) ? "text-primary font-bold" : "text-black"
                } hover:text-primary`}
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.dropdown)
                }
              >
                {item.label}
              </Link>
              {/* Arrow for dropdown */}
              {item.dropdown && (
                <button className="text-[16px] font-[500] hover:text-primary">
                  {openDropdown === item.dropdown ? (
                    <FaChevronUp
                      className="text-primary"
                      onClick={() => handleDropdownToggle(item.dropdown!)}
                    />
                  ) : (
                    <FaChevronDown
                      onClick={() => handleDropdownToggle(item.dropdown!)}
                    />
                  )}
                </button>
              )}
            </div>
            {/* Dropdown menu */}
            {item.dropdown && openDropdown === item.dropdown && (
              <ul
                className={`z-20 ${
                  item.dropdown === "doctors"
                    ? "grid grid-cols-3 w-[600px]"
                    : "grid grid-cols-1 w-[200px]"
                } absolute top-full left-0 bg-white border shadow-md mt-2 rounded-md overflow-hidden`}
                onMouseEnter={() => handleMouseEnter(item.dropdown!)}
                onMouseLeave={() => handleMouseLeave(item.dropdown!)}
              >
                {dropdownItems[item.dropdown!]?.map((subItem, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                  >
                    <Link
                      href={`/doctors?category=${encodeURIComponent(subItem)}`}
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
