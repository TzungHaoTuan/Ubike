"use client";
import { useState } from "react";

export default function Select() {
  const [isSelect, setIsSelect] = useState(false);

  const toggleDropdown = () => {
    setIsSelect(!isSelect);
  };

  return (
    <div className="relative inline-block text-[18px] leading-5 tracking-widest font-medium">
      <button
        onClick={toggleDropdown}
        type="button"
        className="text-[#323232] font-normal flex justify-between items-center w-full md:w-[175px] h-[40px] px-4 py-[10px] gap-4 bg-[#F6F6F6] rounded-lg"
      >
        <div className="">選擇縣市</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-[18px] h-[18px] flex items-center"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
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
