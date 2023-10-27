"use client";
import React, { useState } from "react";
import Form from "./Form";
import Image from "next/image";
import Scenario from "../../../assets/scenario.png";

export default function CheckList({
  city,
  district,
  station,
  setStation,
  taipeiStationData,
}) {
  const [isChecked, setIsChecked] = useState(district);
  const [allChecked, setAllChecked] = useState(true);

  const handleAllChecked = () => {
    setAllChecked((prev) => {
      const newAllChecked = !prev;
      setIsChecked(newAllChecked ? district : []);
      return newAllChecked;
    });
    setStation([]);
  };

  const handleIsChecked = (districtName) => {
    setIsChecked((prev) => {
      if (prev.includes(districtName)) {
        return prev.filter((name) => name !== districtName);
      } else {
        return [...prev, districtName];
      }
    });
    setAllChecked(false);
    setStation([]);
  };

  return (
    <div>
      <div className="flex xl:pr-[72.02px]">
        <div className="w-[311px] md:min-w-[468px] text-base md:text-[18px] pt-6 pb-6 md:pb-10 xl:mr-[72.02px]">
          <label className="items-center">
            <input
              id="allCheckedInput"
              name="allCheckedInput"
              checked={allChecked}
              onChange={handleAllChecked}
              type="checkbox"
              className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
            />
            <span className="ml-[5px] leading-6">全部勾選</span>
          </label>
          {city === "台北市" ? (
            <div className="flex flex-wrap justify-between gap-y-[15px] mt-[15px]">
              {district.map((districtName) => (
                <label
                  key={districtName}
                  className="flex items-center justify-between "
                >
                  <input
                    id={districtName}
                    name={districtName}
                    checked={isChecked.includes(districtName)}
                    onChange={() => handleIsChecked(districtName)}
                    type="checkbox"
                    className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
                  />
                  <span className="ml-[5px] leading-6">{districtName}</span>
                </label>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <Image
          src={Scenario}
          width="auto"
          height="auto"
          alt="ubike scenario"
          style={{ objectFit: "contain" }}
          className="hidden xl:block ml-auto mt-[113px]"
        />
      </div>
      <Form
        city={city}
        districtChecked={isChecked}
        stationSearched={station}
        taipeiStationData={taipeiStationData}
      />
    </div>
  );
}
