"use client";
import { useState, useEffect } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations();
  const slides = [
    {
      image: "/slider/reception.jpg",
      title: t("banner.slide1.title"),
      subtitle: t("banner.slide1.subtitle"),
      buttonText: t("banner.slide1.buttonText"),
      buttonLink: "/about",
    },
    {
      image: "/slider/doctor.jpg",
      title: t("banner.slide2.title"),
      subtitle: t("banner.slide2.subtitle"),
      buttonText: t("banner.slide2.buttonText"),
      buttonLink: "/doctors",
    },
    {
      image: "/slider/ot.jpg",
      title: t("banner.slide3.title"),
      subtitle: t("banner.slide3.subtitle"),
      buttonText: t("banner.slide3.buttonText"),
      buttonLink: "/services",
    },
    {
      image: "/slider/camp.jpg",
      title: t("banner.slide4.title"),
      subtitle: t("banner.slide4.subtitle"),
      buttonText: t("banner.slide4.buttonText"),
      buttonLink: "/contact",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNext = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[300px] md:h-[70vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out flex items-center justify-center text-center ${
            index === currentSlide
              ? "translate-x-0 opacity-100 z-10"
              : direction === "next"
              ? "translate-x-full opacity-0 z-0"
              : "translate-x-[-100%] opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center p-4">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
              <a
                href={slide.buttonLink}
                className="px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 transition z-20 text-white hover:text-primary"
      >
        <FaCircleArrowLeft size={30} />
      </button>
      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 transition z-20 text-white hover:text-primary"
      >
        <FaCircleArrowRight size={30} />
      </button>
    </div>
  );
};

export default Banner;
