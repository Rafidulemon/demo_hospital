import React from "react";
import { useTranslations } from "next-intl";

export default function CSR() {
  const t = useTranslations("csr");

  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner */}
      <div className="w-full h-[300px] bg-primary flex items-center justify-center text-white text-4xl font-bold">
        {t("title")}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-10 space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/Community_Outreach.jpg"
            alt={t("community-alt")}
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-primary">{t("community-title")}</h2>
            <p className="text-gray-600">{t("community-description")}</p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src="/images/edu_aware.jpg"
            alt={t("education-alt")}
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-primary">{t("education-title")}</h2>
            <p className="text-gray-600">{t("education-description")}</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/images/env.jpg"
            alt={t("environment-alt")}
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-primary">{t("environment-title")}</h2>
            <p className="text-gray-600">{t("environment-description")}</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img
            src="/images/disaster.jpg"
            alt={t("disaster-alt")}
            className="w-full md:w-1/2 rounded-md shadow-md"
          />
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-primary">{t("disaster-title")}</h2>
            <p className="text-gray-600">{t("disaster-description")}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full flex flex-col items-center bg-gray-100 py-10 rounded-md shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-4">{t("cta-title")}</h3>
          <p className="text-gray-600 text-center max-w-2xl">{t("cta-description")}</p>
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition">
            {t("cta-button")}
          </button>
        </div>
      </div>
    </div>
  );
}
