import React from "react";
import NewsCard from "../cards/NewsCard";
import { useTranslations } from "next-intl";
import Link from "next/link";

const News = () => {
  const t = useTranslations("home.news");
  
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
    {
      id: 3,
      title: "Free Medical Camp for Underprivileged",
      date: "January 20, 2025",
      image: "/images/news/3.jpg",
      description:
        "A free medical camp was organized to serve underprivileged communities with basic healthcare.",
    },
    {
      id: 4,
      title: "Introducing AI in Diagnostic Services",
      date: "January 25, 2025",
      image: "/images/news/4.jpg",
      description:
        "Demo Hospital has integrated AI technology into its diagnostic services to ensure faster and more accurate results.",
    },
  ];

  return (
    <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[62%] px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">{t("title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="flex justify-center mt-6">
        <Link href="/news" className="bg-primary text-white px-4 py-2 rounded-md">
          {t("all")}
        </Link>
      </div>
    </div>
  );
};

export default News;
