import React from "react";

const CardComponent = ({ area }) => {
  return (
    <div className="w-[350px] h-[298px] bg-[#F3F3F34D] rounded-[20px] border-[1px] border-[#F3F3F3] p-[24px] flex flex-col gap-[24px] justify-between">
      {/* Image Section */}
      <img
        src={area.image}
        alt={area.name}
        className="rounded-3xl w-[302] h-[178px] object-cover"
      />

      {/* Name and Icon Section */}
      <div className="flex items-center justify-between w-[302] h-[48px] ">
        <h5 className="font-poppins font-bold text-[22px] leading-[29px]">
          {area.name}
        </h5>
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
    </div>
  );
};

export default CardComponent;
