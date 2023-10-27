"use client";
import React from "react";

export default function Form({
  city,
  districtChecked,
  stationSearched,
  taipeiStationData,
}) {
  // let result = [];
  // if (stationSearched.length > 0) {
  //   result = taipeiStationData.filter((station) =>
  //     stationSearched.includes(station.sna)
  //   );
  // } else if (city === "台北市" && districtChecked.length > 0) {
  //   result = taipeiStationData.filter((station) =>
  //     districtChecked.includes(station.sarea)
  //   );
  // } else {
  //   result = [];
  // }
  let result = [];

  // Priority 1: Filter by city first
  if (city === "台北市") {
    // Nested Priority: Check for districtChecked
    if (districtChecked.length > 0) {
      result = taipeiStationData.filter((station) =>
        districtChecked.includes(station.sarea)
      );
    }
  }

  // Priority 2: Filter by stationSearched
  // This is independent of city or districtChecked.

  if (stationSearched.length > 0) {
    result = taipeiStationData.filter((station) =>
      stationSearched.includes(station.sna)
    );
  }

  // If none of the above conditions are met, result remains empty

  return (
    <div className="w-full h-[498px] overflow-x-auto rounded-[28px] border-[0.5px] border-[#AEAEAE]">
      <table className="w-full text-center">
        <thead className="whitespace-nowrap text-[18px] leading-6 font-medium text-white bg-[#B5CC22]">
          <tr className="h-[66px] ">
            <th className="px-6 py-3">縣市</th>
            <th className="px-6 py-3">區域</th>
            <th className="px-6 py-3">站點名稱</th>
            <th className="px-6 py-3">可借車輛</th>
            <th className="px-6 py-3">可還空位</th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap text-4 leading-6 font-normal">
          {result.length === 0 ? (
            <tr className="h-[66px] bg-white">
              <td className="px-6 py-4" colSpan={5}></td>
            </tr>
          ) : (
            result.map((station) => (
              <tr key={station.sno} className="h-[66px] bg-white">
                <td className="px-6 py-4">
                  {city !== "選擇縣市" ? city.slice(0, 2) : "台北"}
                </td>
                <td className="px-6 py-4">{station.sarea}</td>
                <td className="px-6 py-4">{station.sna}</td>
                <td className="px-6 py-4 text-[#B5CC22]">{station.sbi}</td>
                <td className="px-6 py-4 text-[#B5CC22]">{station.bemp}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
