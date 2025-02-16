"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Properties",
    "Neighborhood",
    "Blogs",
    "Contact",
  ];

  return (
    <nav className="absolute bg-transparent z-20 w-full max-w-[1087px] h-[101px] top-0 left-1/2 transform -translate-x-1/2  ">
      <div className="flex items-center px-4 py-5 justify-between w-full">
        {/* Logo */}
        <div className="font-bold text-white bg-white w-[85px] h-[87px] flex items-center justify-center sm:w-[74px] sm:h-[74px] mt-11 sm:mt-0">
          <span>Logo</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-[40px]">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-poppins font-semibold text-[16px] leading-[21px] tracking-[0%] text-white "
            >
              {item}
            </a>
          ))}

          {/* Desktop Button */}
          <button
            className="text-white bg-[#FF5A3C] hover:bg-[#e04e2f]
              w-[76px] h-[47px] gap-[4px] rounded-[10px] px-[18px] 
              py-[11px] flex items-center justify-center"
          >
            <span className="text-[#F3F3F3] font-poppins font-semibold text-[14px] leading-[25px] w-[16px] h-[25px] flex items-center justify-center">
              ES
            </span>
            <span className="w-5 h-5 flex items-center justify-center text-[#E7272D]">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#E7272D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile Menu & Button */}
        <div className="lg:hidden flex items-center gap-3 mt-11 ">
          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-[43.52px] h-[40.96px] bg-white bg-opacity-10 text-2xl text-white flex items-center justify-center"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* "EN" Button */}
          <button className="w-[43.52px] h-[40.96px] text-white border border-[#FF5A3C] px-4 py-2  bg-transparent hover:bg-transparent hover:text-white transition flex items-center justify-center ">
            ES{" "}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black bg-opacity-10 w-full px-4 py-5 absolute top-full left-0 z-20 mt-7 ">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-lg font-medium text-white py-2 hover:text-[#FF5A3C]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
