import Image from "next/image";
import Link from "next/link";
import logo from "../assets/ubike.png";
import Category from "./Category";
export default function Header() {
  return (
    <div className="flex flex-row h-[72px] lg:h-[104px] items-center border-b-[1px] border-[#EBEBEB] px-8 lg:px-[124px]">
      <Link href="/">
        <Image
          src={logo}
          width={65}
          height={65}
          style={{ objectFit: "contain" }}
          alt="ubike logo"
          className="w-[65px] h-[65px] lg:w-[95px] lg:h-[95px]"
        />
      </Link>
      <Category />
    </div>
  );
}
