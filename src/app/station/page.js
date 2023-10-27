import React from "react";
import Select from "./components/Select";
import GetUbikeData from "../utils/GetUbikeData";

async function getData() {
  try {
    const res = await fetch(
      "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Page() {
  const taipeiStationData = await getData();
  // console.log(taipeiStationData);

  return (
    <div className="flex flex-col pt-6 pb-11">
      <div className="mb-4 lg:my-8 text-[24px] leading-6 font-bold text-[#B5CC22] inline-block tracking-[4.32px] mr-[-4.32px]">
        站點資訊
      </div>
      <Select taipeiStationData={taipeiStationData} />
    </div>
  );
}
