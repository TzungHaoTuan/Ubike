"use client";
import { useState } from "react";
import CheckList from "./CheckList";
import Search from "./Search";

export default function Select({ taipeiStationData }) {
  const [isSelect, setIsSelect] = useState(false);
  const [city, setCity] = useState("選擇縣市");
  const [station, setStation] = useState([]);

  const sarea = taipeiStationData.map((station) => station.sarea);
  const district = [...new Set(sarea)];

  const sna = taipeiStationData.map((station) => station.sna);
  const stations = [...new Set(sna)];
  const cities = ["台北市", "新北市", "桃園市", "台中市", "台南市", "高雄市"];

  const toggleDropdown = () => {
    setIsSelect(!isSelect);
  };
  const selectCity = (city) => {
    setCity(city);
    toggleDropdown();
    handleSearch("");
  };
  const handleSearch = (term) => {
    if (cities.includes(term)) {
      setCity(term);
    }
    const stationSearched = stations.filter((station) =>
      station.includes(term)
    );
    if (stationSearched.length > 0) {
      setStation(stationSearched);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative inline-block text-[18px] leading-5 tracking-widest font-medium">
          <button
            onClick={toggleDropdown}
            type="button"
            className="text-[#323232] font-normal flex justify-between items-center w-full md:w-[175px] h-[40px] px-4 py-[10px] gap-4 bg-[#F6F6F6] rounded-lg"
          >
            <div className="">{city}</div>
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
            <div className="absolute z-10 mt-3 w-[175px] rounded-lg shadow-lg bg-[#F6F6F6] ring-1 ring-black ring-opacity-5">
              <div className="flex flex-col p-4 gap-4 text-[#323232]">
                {cities.map((city) => (
                  <div
                    key={city}
                    onClick={() => selectCity(city)}
                    className="hover:bg-gray-100 hover:text-gray-900"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <Search onSearch={handleSearch} />
      </div>
      <CheckList
        city={city}
        district={district}
        station={station}
        setStation={setStation}
        taipeiStationData={taipeiStationData}
      />
    </div>
  );
}
