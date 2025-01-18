import React from "react";
import NewsCard from "@/components/cards/NewsCard";
import Image from "next/image";
import { useTranslations } from "next-intl";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Demo Hospital Launches New Cardiology Unit",
      date: "January 10, 2025",
      image: "/images/news/1.jpg",
      description:
        "Demo Hospital has launched a state-of-the-art cardiology unit to provide advanced care for heart patients.",
    },
    {
      id: 2,
      title: "Health Awareness Campaign 2025",
      date: "January 15, 2025",
      image: "/images/news/2.jpg",
      description:
        "Join our health awareness program aimed at educating the public about healthy living practices.",
    },
    // Add 18 more dummy news items
    ...Array.from({ length: 18 }, (_, i) => ({
      id: i + 3,
      title: `News Title ${i + 3}`,
      date: `January ${i + 16}, 2025`,
      image: `/images/news/1.jpg`,
      description:
        "This is a placeholder description for the news article. Stay updated with the latest news from Demo Hospital.",
    })),
  ];
  const t = useTranslations();

  return (
    <div className="w-full">
      <div className="relative w-full h-[220px] md:h-[600px] mt-[100px] md:mt-[150px]">
        <Image
          src="/images/news_image.jpg"
          alt="FAQ"
          layout="fill"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-[24px] md:text-[48px] font-bold">
            {t("nav.news")}
          </h1>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center my-6">
        {t("home.news.title")}
      </h2>
      <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {newsData.map((news) => (
          <NewsCard
            key={news.id}
            title={news.title}
            date={news.date}
            image={news.image}
            description={news.description}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
