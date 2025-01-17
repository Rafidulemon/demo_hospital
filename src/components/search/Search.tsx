"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useTranslations } from "next-intl";

const Search = () => {
  const t = useTranslations();
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<string[]>([]);

  const data = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Radiology",
    "Oncology",
    "Dermatology",
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  return (
    <div className="w-[250px] md:w-[400px] relative">
      {/* Search Input */}
      <div className="w-full flex flex-row gap-0">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder={t("search.search")}
          className="w-full px-4 py-2 h-[38px] border border-gray-300 rounded-l-md focus:outline-none text-[12px] md:text-[16px] text-black"
        />
        <div className="cursor-pointer w-[60px] h-[38px] bg-primary rounded-r-md flex flex-col justify-center items-center">
          <IoSearch color="#FFFFFF" size={20} />
        </div>
      </div>

      <div
        className="absolute top-[42px] left-0 w-full bg-white shadow-md rounded-md text-[12px] md:text-[16px] z-50"
      >
        {query && (
          <ul>
            {filteredResults.length > 0 ? (
              filteredResults.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
