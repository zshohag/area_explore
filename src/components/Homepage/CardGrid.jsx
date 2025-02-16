import React from "react";
import { Data } from "../../../public/data";
import CountyHeader from "../CountyHeader/CountyHeader";
import IconsGroup from "../IconsGroup/IconsGroup";
import CardComponent from "../CardComponent/CardComponent";

const CardGrid = () => {
  return (
    <div className="container mx-auto flex justify-center items-center px-4">
      <div className="w-full  p-4 sm:p-6 md:p-8 lg:p-[36px]">
        <div className="lg:mt-14"></div>
        {/* Broward County Section */}
        <CountyHeader countyName="Broward County" />

        {/* Miami Dade County Section */}
        <div className="w-full max-w-[1090px] mx-auto mb-8 mt-4">
          <div className="flex items-center justify-between lg:px-4 py-4 rounded-lg">
            <h5 className="text-[22px] font-bold leading-[29px] font-poppins">
              Miami Dade County
            </h5>
            {/* icon */}
            <div className="lg:hidden w-[48px] h-[48px] rounded-[8px] flex items-center justify-center bg-[#1018280D]">
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

            <IconsGroup isSmallDevice={false} />
          </div>

          {/* Icons for smaller devices */}
          <IconsGroup isSmallDevice={true} />
          <div className="w-full h-[1px] bg-[#D6D6D6] mt-3"></div>
        </div>

        {/* Grid Section */}
        <div className="max-w-[1090px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center py-5">
          {Data.map((area) => (
            <CardComponent key={area.id} area={area} />
          ))}
        </div>

        <div className="lg:mt-10"></div>
        {/* Repeat Broward County Section */}
        <CountyHeader countyName="Broward County" />

        {/* Monroe County Section */}
        <CountyHeader countyName="Monroe County" />
        <div className="mb-24"></div>
      </div>
    </div>
  );
};

export default CardGrid;
