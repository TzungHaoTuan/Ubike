import Image from "next/image";
import logo from "../assets/ubike.png";
import Category from "./Category";
export default function Header() {
  return (
    <div className="flex flex-row h-[101px] lg:h-[104px] items-center border-b-[1px] border-[#EBEBEB] px-8 lg:px-[124px]">
      <Image
        src={logo}
        alt="ubike logo"
        priority={true}
        className="w-[65px] h-[65px] lg:w-[95px] lg:h-[95px]"
      />
      <Category />
    </div>
  );
}
