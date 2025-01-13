"use client"
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQ() {
  const t = useTranslations("faq");

  const faqs = [
    { question: t("q1"), answer: t("a1") },
    { question: t("q2"), answer: t("a2") },
    { question: t("q3"), answer: t("a3") },
    { question: t("q4"), answer: t("a4") },
    { question: t("q5"), answer: t("a5") },
    { question: t("q6"), answer: t("a6") },
    { question: t("q7"), answer: t("a7") },
    { question: t("q8"), answer: t("a8") },
    { question: t("q9"), answer: t("a9") },
    { question: t("q10"), answer: t("a10") },
    { question: t("q11"), answer: t("a11") },
    { question: t("q12"), answer: t("a12") },
    { question: t("q13"), answer: t("a13") },
    { question: t("q14"), answer: t("a14") },
    { question: t("q15"), answer: t("a15") },
    { question: t("q16"), answer: t("a16") },
    { question: t("q17"), answer: t("a17") },
    { question: t("q18"), answer: t("a18") },
    { question: t("q19"), answer: t("a19") },
    { question: t("q20"), answer: t("a20") },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner */}
      <div className="w-full h-[300px] bg-primary flex items-center justify-center text-white text-4xl font-bold">
        {t("title")}
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-[16px] md:text-lg font-semibold text-primary">
                {faq.question}
              </h3>
              {expandedIndex === index ? (
                <FaChevronUp className="text-primary" />
              ) : (
                <FaChevronDown className="text-primary" />
              )}
            </div>
            {expandedIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
