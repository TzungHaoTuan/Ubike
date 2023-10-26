"use client";
import { useState } from "react";

export default function Search() {
  const [isSelect, setIsSelect] = useState(false);

  const toggleDropdown = () => {
    setIsSelect(!isSelect);
  };

  return (
    <div className="relative inline-block text-[18px] leading-5 tracking-widest font-medium">
      <button
        onClick={toggleDropdown}
        type="button"
        className="text-[#323232] font-normal flex justify-between items-center w-full md:w-[277px] h-[40px] px-4 py-[10px] gap-4 bg-[#F6F6F6] rounded-lg"
      >
        <div className="">搜尋站點</div>
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

      {isSelect && (
        <div className="absolute mt-3 w-[175px] rounded-lg shadow-lg bg-[#F6F6F6] ring-1 ring-black ring-opacity-5">
          <div className="flex flex-col p-4 gap-4 text-[#323232]">
            <div className="hover:bg-gray-100 hover:text-gray-900">台北市</div>
            <div className="text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              新竹科學園區
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
