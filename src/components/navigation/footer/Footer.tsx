import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="bg-primary_light text-white py-12">
      <div className="w-full lg:w-[80%] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="w-full col-span-2 md:col-span-1 gap-6 md:gap-0 flex flex-row md:flex-col items-center md:items-start">
            <div className="flex items-center w-[110px] h-[110px] md:w-[150px] md:h-[150px]">
              <Image
                src="/logo/white_logo.png"
                alt="Demo Hospital"
                width={150}
                height={150}
                className="object-contain mb-6"
              />
            </div>
            <div>
              <h3 className="text-[20px] font-semibold mb-4">
                {t("footer.contactInfo.title")}
              </h3>
              <p className="text-sm mb-2">
                {t("footer.contactInfo.hospitalName")}
              </p>
              <p className="text-sm mb-2">{t("footer.contactInfo.address")}</p>
              <p className="text-sm mb-2">{t("footer.contactInfo.phone")}</p>
              <p className="text-sm mb-2">{t("footer.contactInfo.email")}</p>
            </div>
          </div>

          <div className="pl-2">
            <h3 className="text-[20px] font-semibold mb-4">
              {t("footer.quickLinks.title")}
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-[16px]">
                  {t("footer.quickLinks.links.aboutUs")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[16px]">
                  {t("footer.quickLinks.links.services")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[16px]">
                  {t("footer.quickLinks.links.contactUs")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[16px]">
                  {t("footer.quickLinks.links.terms")}
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-[16px]">
                  {t("footer.quickLinks.links.privacy")}
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex flex-col items-center md:items-start">
            <h3 className="text-[20px] font-semibold mb-4">
              {t("footer.followUs.title")}
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-primary">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <FaLinkedin />
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col items-center md:items-start pr-2">
            <h3 className="text-[20px] font-semibold mb-4">
              {t("footer.location.title")}
            </h3>
            <div className="w-full h-40">
              <iframe
                title={t("footer.location.title")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7383.147591326703!2d91.97143444477177!3d22.294129095631416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2331c6f36953%3A0x39e7d85c5dae2a98!2sPatiya!5e0!3m2!1sen!2sbd!4v1738920409560!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="md:hidden col-span-2 flex flex-col items-center md:items-start px-2">
            <h3 className="text-[20px] font-semibold mb-4">
              {t("footer.followUs.title")}
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-primary">
                <FaFacebook />
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <FaLinkedin />
              </a>
              <a href="#" className="text-xl hover:text-primary">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white pt-6 text-center">
          <p className="text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
