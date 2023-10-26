import React from "react";

export default function CheckList() {
  return (
    <div className="w-[311px] md:w-[468px] text-base md:text-[18px]">
      <label className="flex items-center mt-6 mb-[15px]">
        <input
          type="checkbox"
          className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
        />
        <span className="ml-[5px] leading-6">全部勾選</span>
      </label>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-[15px]">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
          />
          <span className="ml-[5px] leading-6">松山區</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
          />
          <span className="ml-[5px] leading-6">松山區</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
          />
          <span className="ml-[5px] leading-6">松山區</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
          />
          <span className="ml-[5px] leading-6">松山區</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="m-[11px] accent-[#B5CC22] border-2 rounded-sm"
          />
          <span className="ml-[5px] leading-6">松山區</span>
        </label>
      </div>
    </div>
  );
}
