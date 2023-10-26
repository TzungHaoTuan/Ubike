"use client";
import Link from "next/link";
import Login from "./Login";
import { useState } from "react";

export default function Category() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="flex w-full">
      <div
        className={`${isMenuOpen ? "" : "hidden"}
      flex lg:flex flex-col lg:flex-row absolute lg:relative
       top-[101px] lg:top-0 left-0 p-8 lg:p-0 z-10 items-start lg:items-center lg:pl-[60px] gap-10
       w-full h-full text-white lg:text-[#677510] bg-[#B5CC22] lg:bg-white font-medium`}
      >
        <Link href="/">使用說明</Link>
        <Link href="/">收費方式</Link>
        <Link href="/station">站點資訊</Link>
        <Link href="/">最新消息</Link>
        <Link href="/">活動專區</Link>
        <Login />
      </div>

      <div
        onClick={handleMenuToggle}
        className="lg:hidden w-6 h-6 px-[3px] py-[6px] ml-auto flex flex-col 
        justify-between items-center"
      >
        <div
          className={`${isMenuOpen ? "rotate-45 translate-y-[5px]" : ""}
         w-full h-1/6 bg-[#B5CC22] rounded-full transition  duration-300`}
        ></div>
        <div
          className={`${isMenuOpen ? "opacity-0" : "opacity-100"}
        w-full h-1/6 bg-[#B5CC22] rounded-full transition duration-300`}
        ></div>
        <div
          className={`${isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}
         w-full h-1/6 bg-[#B5CC22] rounded-full transition  duration-300`}
        ></div>{" "}
      </div>
    </div>
  );
}
