import React from "react";

const CountyHeader = ({ countyName }) => {
  return (
    <div className="w-full max-w-[1050px] mx-auto mb-8">
      <div className="flex items-center justify-between py-4 rounded-lg">
        <h5 className="text-[22px] font-bold leading-[29px] font-poppins">
          {countyName}
        </h5>
        <div className="w-[48px] h-[48px] text-white bg-[#FF5A3C] rounded-[8px] flex items-center justify-center">
         
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.83203 1.83398L10.1654 10.1673M10.1654 10.1673V1.83398M10.1654 10.1673H1.83203"
              stroke="white"
              strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#D6D6D6] mt-2"></div>
    </div>
  );
};

export default CountyHeader;
