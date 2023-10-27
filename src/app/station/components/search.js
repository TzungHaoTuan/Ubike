"use client";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative inline-block text-[18px] leading-5 tracking-widest font-medium"
    >
      <input
        id="searchInput"
        name="searchInput"
        type="text"
        placeholder="搜尋站點"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-[#323232] font-normal flex justify-between items-center w-full md:w-[277px] h-[40px] pl-4 pr-9 py-[10px] gap-4 bg-[#F6F6F6] rounded-lg"
      ></input>
      <button
        type="submit"
        className="absolute top-1/2 right-4  -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-[18px] h-[18px]"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
