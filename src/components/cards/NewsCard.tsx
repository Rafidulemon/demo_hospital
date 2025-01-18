import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, image, description }) => {
    const t = useTranslations('home.news');
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{date}</p>
        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
        <a
          href="#"
          className="text-primary font-medium mt-4 inline-block hover:underline"
        >
          {t('read')}
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
