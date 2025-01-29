import React from "react";
import { Vortex } from "../../ui/vortex";

export function TopLeaders() {
  return (
    <div className="w-[100%] mx-auto rounded-md  h-[20rem] overflow-hidden">
      <Vortex baseSpeed={0}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Top Leaders Recommended

        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        AtleastOnce,Every Engineer should be part of LinuxWorld's summer Internship Program 

        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-[#ff0000] hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Apply Now
          </button>
          <button className="px-4 py-2  text-white ">
          The Creator 2025</button>
        </div>
      </Vortex>
    </div>
  );
}
