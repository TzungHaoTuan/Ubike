import React from "react";
import Select from "./components/select";
import Search from "./components/search";
import CheckList from "./components/checkList";
import Form from "./components/form";
import Image from "next/image";
import Scenario from "../../assets/scenario.png";
import GetUbikeData from "../utils/GetUbikeData";

async function getData() {
  const res = await fetch(
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="mt-6 mb-4 lg:my-8 text-[24px] leading-6 font-bold text-[#B5CC22] inline-block tracking-[4.32px] mr-[-4.32px]">
        站點資訊
      </div>
      <div className="flex">
        <div className="mr-[72.02px]">
          <div className="flex flex-col md:flex-row gap-4">
            <Select />
            <Search />
          </div>
          <CheckList />
        </div>
        <Image
          src={Scenario}
          alt="ubike scenario"
          priority={true}
          className="hidden lg:inline-flex object-contain ml-auto mr-[72.02px] mt-[113px]"
        />
      </div>
      <Form />
    </div>
  );
}
