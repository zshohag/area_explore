import React from "react";

const Banner = () => {
  return (
    <div
      className="relative w-full min-h-screen lg:h-[871px] bg-cover bg-center bg-no-repeat flex justify-center items-center text-center mx-auto px-4"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(47, 47, 47, 0) 0%, rgba(0, 0, 0, 0.1) 100%), url('/assets/images/Banner.jpeg')",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 text-white px-6 w-[393px] h-[558px] sm:w-full sm:h-auto flex flex-col justify-center items-center">
        <p className="font-nunito-sans font-bold text-sm sm:text-base flex justify-center items-center">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M8.20763 0.459035C8.0201 0.273916 7.7658 0.169922 7.50063 0.169922C7.23547 0.169922 6.98116 0.273916 6.79363 0.459035L0.146632 7.02165C0.100144 7.06755 0.0632674 7.12205 0.0381083 7.18203C0.0129492 7.242 0 7.30629 0 7.37121C0 7.43612 0.0129492 7.50041 0.0381083 7.56039C0.0632674 7.62036 0.100144 7.67486 0.146632 7.72076C0.240518 7.81347 0.367856 7.86556 0.500632 7.86556C0.566375 7.86556 0.631476 7.85277 0.692215 7.82793C0.752954 7.80308 0.808144 7.76667 0.854632 7.72076L7.50063 1.15716L14.1466 7.72076C14.2405 7.81347 14.3679 7.86556 14.5006 7.86556C14.6334 7.86556 14.7607 7.81347 14.8546 7.72076C14.9485 7.62806 15.0013 7.50232 15.0013 7.37121C15.0013 7.2401 14.9485 7.11436 14.8546 7.02165L12.5006 4.69817V1.44649C12.5006 1.31554 12.448 1.18996 12.3542 1.09737C12.2604 1.00478 12.1332 0.952761 12.0006 0.952761H11.0006C10.868 0.952761 10.7408 1.00478 10.6471 1.09737C10.5533 1.18996 10.5006 1.31554 10.5006 1.44649V2.72326L8.20763 0.459035Z"
              fill="white"
            />
            <path
              d="M7.5 2.23047L13.5 8.15519V12.3094C13.5 12.7022 13.342 13.079 13.0607 13.3568C12.7794 13.6345 12.3978 13.7906 12 13.7906H3C2.60218 13.7906 2.22064 13.6345 1.93934 13.3568C1.65804 13.079 1.5 12.7022 1.5 12.3094V8.15519L7.5 2.23047Z"
              fill="white"
            />
          </svg>
          Real Estate Agency
        </p>

        <h1 className="text-center font-poppins font-bold text-[30px] sm:text-6xl lg:text-[96px] leading-[33px] sm:leading-tight lg:leading-[95px] tracking-[0%] sm:tracking-[-1%] lg:tracking-[-4%] mb-4">
          Miami Real Estate Specialists
        </h1>

        <p className="font-nunito-sans font-normal text-[14px] sm:text-[14px] lg:text-[16px] leading-[19px] sm:leading-[25px] text-center sm:max-w-[348px] sm:h-[76px] sm:w-[348px] sm:px-4 sm:mx-auto lg:w-[819px] lg:h-[50px] lg:max-w-[819px]">
          Your specialists in residential and commercial properties. From dream
          homes to prime business spaces, trust our unique expertise to guide
          you in Miami/South Florida's dynamic market.
        </p>
      </div>
    </div>
  );
};

export default Banner;
