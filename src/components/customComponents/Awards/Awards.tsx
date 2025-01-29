import React from 'react';
import { Card } from "@/components/ui/card";

const Award = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <Card className="bg-white shadow-lg rounded-[40px] px-10 py-8 relative"> {/* Removed overflow-hidden */}
        <div className="flex items-start justify-between">
          {/* Left Section */}
          <div className="flex flex-col gap-3 z-10"> {/* Added z-index */}
            <div className="flex items-center gap-4">
              <img 
                src="/assets/Award/microsoft.png" 
                alt="Microsoft Logo" 
                className="h-20 w-20"
              />
              <span className="text-[#666666] text-3xl font-semibold">Microsoft</span>
            </div>
            {/* <span className="text-[#666666] text-2xl pl-2">Solutions Partner</span> */}
          </div>

          {/* Center Section */}
          <div className="flex flex-col ml-12 mr-auto z-10"> {/* Added z-index */}
            <h2 className="text-[#0A2751] text-[40px] font-bold leading-[1.1] mb-3">
              2024 Partner Of the Year
            </h2>
            <div className="flex flex-col text-[#666666] gap-1">
              <span className="text-2xl">Analytics Award</span>
              <span className="text-xl text-[#888888]">Finalist</span>
            </div>
          </div>

          {/* Trophy Graphic - Fixed positioning */}
          <div className="absolute right-4 -top-8"> {/* Adjusted positioning */}
            <svg 
              preserveAspectRatio="xMidYMid meet" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 233 233" 
              className="h-[200px] w-[200px] text-yellow-500" // Tailwind size + color
              role="img" 
              aria-label="trophy"
            >
              <g>
                <path fill="#EDA900" d="M176.115 102.302h-5.916V93.2h5.916c25.075 0 45.508-20.433 45.508-45.508V34.131h-51.424v-9.102h60.526v22.663c0 30.08-24.484 54.61-54.61 54.61m-119.23 0H62.8V93.2h-5.916c-25.075 0-45.508-20.433-45.508-45.508V34.131h52.789v-9.102H2.276v22.663c0 30.08 24.483 54.61 54.609 54.61" />
                <path fill="#1F3F77" d="M190.678 180.666H42.322v50.059h148.356z" />
                <path fill="#0A2751" d="M190.678 180.666H42.322v9.329h148.356z" />
                <path fill="#3179AF" d="M202.965 217.072H30.035v13.653h172.93z" />
                <path fill="#68A1D6" d="M164.602 217.072H30.035v13.653h134.567z" />
                <path fill="#E36414" d="M145.625 167.014h-58.25v13.652h58.25z" />
                <path fill="#F8961E" d="M129.015 167.014h-41.64v13.652h41.64z" />
                <path fill="#F8D707" d="M52.334 2.275v95.93a31.485 31.485 0 0 0 22.299 30.127c13.243 4.05 22.299 16.292 22.299 30.126v8.556h39.136v-8.556a31.485 31.485 0 0 1 22.299-30.126c13.243-4.05 22.299-16.292 22.299-30.126V2.276z" />
                <path fill="#3179AF" d="M202.965 178.391H30.035v4.55h172.93z" />
                <path fill="#68A1D6" d="M164.738 178.391H30.035v4.55h134.703z" />
                <path fill="#F8D707" d="M162.008 196.594H70.992v4.551h91.016z" />
                <path fill="#EDA900" d="M52.334 2.275V25.03h64.53c13.106 0 23.755 10.65 23.755 23.755v58.842a23.81 23.81 0 0 1-12.059 20.706 23.75 23.75 0 0 0-12.06 20.706v17.976h19.568v-8.556a31.485 31.485 0 0 1 22.299-30.126c13.243-4.05 22.299-16.292 22.299-30.126V2.276z" />
                <path fill="#F8D707" d="M187.037 2.275H45.963v13.653h141.074z" />
                <path fill="#FFFA5A" d="M76.817 2.275H58.25v13.653h18.567z" />
                <path fill="#FFFA5A" d="M124.373 2.275H94.429v13.653h29.944z" />
                <path fill="#FFFA5A" d="M84.19 34.13c-9.876 0-17.885 8.01-17.885 17.885v14.7c0 9.875 8.01 17.884 17.884 17.884 9.876 0 17.885-8.01 17.885-17.885V52.016c0-9.875-8.01-17.884-17.885-17.884" />
                <path fill="#F8D707" d="M25.62 34.13H2.276v-9.1h23.346a4.564 4.564 0 0 1 4.55 4.55 4.535 4.535 0 0 1-4.55 4.55" />
                <path fill="#F8D707" d="M6.826 47.692a4.564 4.564 0 0 1-4.55-4.55V25.028h9.101V43.14a4.564 4.564 0 0 1-4.55 4.551" />
                <path fill="#F8961E" d="M121.051 97.842h-9.102V56.885h-4.551v-9.102h9.102a4.564 4.564 0 0 1 4.551 4.551z" />
              </g>

              {/* SVG paths remain same */}
            </svg>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Award;