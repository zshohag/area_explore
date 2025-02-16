import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { FaArrowDownWideShort } from "react-icons/fa6";


const IconsGroup = ({ isSmallDevice }) => {
  if (isSmallDevice) {
    return (
      <div className="lg:hidden flex flex-row items-center gap-[32px] w-[353px] h-[20px]  mt-2">
        <RiSearchLine size={20} />
        <LuArrowDownUp size={20} />
        <FaArrowDownWideShort size={20} />
      </div>
    );
  }

  return (
    <div className="hidden lg:flex w-[204px] h-[48px] items-center gap-[32px]">
      <RiSearchLine size={20} />
      <LuArrowDownUp size={20} />
      <FaArrowDownWideShort size={20} />
      <div className="w-[48px] h-[48px] rounded-[8px] flex items-center justify-center bg-[#1018280D]">
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33203 1.83398H9.66536M9.66536 1.83398V10.1673M9.66536 1.83398L1.33203 10.1673"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default IconsGroup;
