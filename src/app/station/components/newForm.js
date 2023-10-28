"use client";
import React, { useState } from "react";

export default function Form({
  city,
  districtChecked,
  stationSearched,
  taipeiStationData,
}) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  let filteredData = [];

  if (city === "台北市") {
    if (districtChecked.length > 0) {
      filteredData = taipeiStationData.filter((station) =>
        districtChecked.includes(station.sarea)
      );
    }
  }

  if (stationSearched.length > 0) {
    filteredData = taipeiStationData.filter((station) =>
      stationSearched.includes(station.sna)
    );
  }

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  const sortData = (data) => {
    if (!sortConfig.key) return data;

    const sortedData = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    return sortedData;
  };

  const sortedData = sortData(filteredData);

  return (
    <div className="w-full h-[498px] overflow-x-auto rounded-[28px] border-[0.5px] border-[#AEAEAE]">
      <table className="w-full text-center">
        <thead className="whitespace-nowrap text-[18px] leading-6 font-medium text-white bg-[#B5CC22]">
          <tr className="h-[66px] ">
            <th className="px-6 py-3">縣市</th>
            <th onClick={() => handleSort("sarea")} className="px-6 py-3">
              區域
            </th>
            <th onClick={() => handleSort("sna")} className="px-6 py-3">
              站點名稱
            </th>
            <th onClick={() => handleSort("sbi")} className="px-6 py-3">
              可借車輛
            </th>
            <th onClick={() => handleSort("bemp")} className="px-6 py-3">
              可還空位
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap text-4 leading-6 font-normal">
          {filteredData.length === 0 ? (
            <tr className="h-[66px] bg-white">
              <td className="px-6 py-4" colSpan={5}></td>
            </tr>
          ) : (
            sortedData.map((station) => (
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
