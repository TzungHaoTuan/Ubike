import React from "react";

export default function Form() {
  return (
    <div className="overflow-x-auto w-full mt-6 md:mt-10 rounded-[28px] border-[0.5px] border-[#AEAEAE]">
      <table className="w-full overflow-x-sroll text-center whitespace-nowrap">
        <thead className="text-[18px] leading-6 font-medium text-white bg-[#B5CC22]">
          <tr className="h-[66px] ">
            <th className="px-6 py-3">縣市 </th>
            <th className="px-6 py-3">區域 </th>
            <th className="px-6 py-3">站點名稱</th>
            <th className="px-6 py-3">可借車輛</th>
            <th className="px-6 py-3">可還空位</th>
          </tr>
        </thead>
        <tbody className="text-4 leading-6 font-normal">
          <tr className="h-[66px] bg-white">
            <td className="px-6 py-4">台北 </td>
            <td className="px-6 py-4">松山區</td>
            <td className="px-6 py-4">台北</td>
            <td className="px-6 py-4 text-[#B5CC22]">12</td>
            <td className="px-6 py-4 text-[#B5CC22]">12</td>
          </tr>
          <tr className="h-[66px] bg-[#F6F6F6]">
            <td className="px-6 py-4">台北 </td>
            <td className="px-6 py-4">松山區</td>
            <td className="px-6 py-4">台北</td>
            <td className="px-6 py-4 text-[#B5CC22]">12</td>
            <td className="px-6 py-4 text-[#B5CC22]">12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
