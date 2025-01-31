"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { IndiaMap } from "@/components/ui/India-map";
import { Badge } from "@/components/ui/badge"

import { MdOnlinePrediction } from "react-icons/md"
import { BsCalendarCheck } from "react-icons/bs"
import { AiOutlineHourglass } from "react-icons/ai"


const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="relative flex flex-col lg:flex-row min-h-[420px] overflow-hidden rounded-xl max-w-6xl ">
        {/* Left Side Content */}
        <div className="lg:w-3/5 relative">
          <div className="bg-red-600 h-full p-6 lg:p-10">
            {/* Decorative background elements */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]" />
              <div className="absolute right-0 h-full w-[100px] bg-gradient-to-r from-transparent to-red-700/30" />
            </div>

            <div className="relative z-10 text-white space-y-5">
              {/* Main Content Stack */}
              <div className="space-y-2">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                  Summer Internship 2025
                </h1>
                <p className="text-xl lg:text-2xl font-medium text-red-100">
                  Industrial Training Program
                </p>
              </div>


              {/* Target Audience */}
              <div className="space-y-2">
                <h2 className="text-lg lg:text-xl font-medium">
                  For Engineering Students
                </h2>
                <p className="text-base lg:text-lg text-red-100">
                  Open for B.Tech | M.Tech | BCA | MCA | B.SC IT
                </p>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-red-600 hover:bg-red-50 font-semibold relative z-10 shadow-lg"
              >
                Applications Open
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side Map */}
        <div className="lg:w-2/5 relative">
          {/* Gradient overlay connecting left and right sections */}
          <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-red-600/20 to-transparent z-10" />
          
          <div className="bg-black backdrop-blur-sm h-full  md:pl-32 md:pt-6">
            <div className="relative z-10">
            <IndiaMap
  connections={[
    {
      start: { lat: 28.6139, lng: 78.2090, label: "Delhi" }, // Adjusted to accurate location
      end: { lat: 5.0760, lng: 76.8777, label: "Mumbai" }  // Adjusted for better fit
    },
    {
      start: { lat: 22.5726, lng: 88.3639, label: "Kolkata" }, // Corrected
      end: { lat: 13.0827, lng: 80.2707, label: "Chennai" }   // Slightly shifted
    },
    {
      start: { lat: 2.9716, lng: 77.5946, label: "Bengaluru" }, // Fixed longitude
      end: { lat: 12.3850, lng: 81.4867, label: "Hyderabad" }  // Corrected location
    },
    {
        start: { lat: 25.6139, lng: 76.2090, label: "Jaipur" }, // Adjusted to accurate location
        end: { lat: 8.0760, lng: 75.8777, label: "Pune" }  // Adjusted for better fit
      },
  ]}
/>

            </div>
          </div>
        </div>


      </div>
        <div className="relative md:-mt-12 lg:-mt-12 z-50">
              <div className={`bg-black rounded-lg p-4 shadow-lg max-w-6xl mx-auto`}>
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4"> {/* Adjusted for consistency */}
                  {/* Info Sections Container */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    {/* Online Section */}
                    <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
                      <MdOnlinePrediction className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium">SUMMER TRAINING </span>
                        <span className="font-bold text-xs block"></span>
                      </div>
                    </div>

                    {/* Admission Section */}
                    <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
                      <BsCalendarCheck className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium"> TENTATIVE START DATES</span>
                        <span className="font-bold text-xs block text-white">May, 2025 <br /> June, 2025 <br /> July, 2025</span>
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600 text-[10px] mt-0.5">
                          Limited seats
                        </Badge>
                      </div>
                    </div>

                    {/* Course Fee Section */}
                    <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
                      <AiOutlineHourglass className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium">DURATION SUMMER PROGRAM​</span>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                             <span className="font-bold text-xs text-white">6 weeks / 8 weeks</span>
                             {/* <span className="line-through text-gray-400 text-xs">₹75,000</span>
                             <span className="text-green-600 font-semibold text-[10px]">
                               Save ₹30,000/-
                             </span> */}
                          </div>
                      {/* <div>
                        <span className="text-black text-xs font-medium">Course Fees</span>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                             <span className="font-bold text-xs">₹45,000 (+taxes)</span>
                             <span className="line-through text-gray-400 text-xs">₹75,000</span>
                             <span className="text-green-600 font-semibold text-[10px]">
                               Save ₹30,000/-
                             </span>
                          </div> */}
                         


                        </div>
                      </div>


                    </div>
                    <div className="flex items-start gap-2 justify-start sm:justify-center lg:justify-center">
                      <BsCalendarCheck className="text-gray-700 text-3xl bg-gray-50 p-1 rounded-lg mt-1" />
                      <div>
                        <span className="text-white text-xs font-medium">DELIVERABLES FOR 6 WEEKS SUMMER PROGRAM​</span>
                        <span className="font-bold text-xs block text-white"> - Industry Recognised Internship (Project) Certificate <br /> - Training Certificate from LinuxWorld Informatics Pvt Ltd</span>

                      </div>
                    </div>
                  </div>
                 

                  {/* Button Section */}
                  <div className="flex items-start gap-2 lg:border-l lg:pl-4 w-full lg:w-auto pl-8">
                    <div className="flex flex-col items-start sm:items-center lg:items-center w-full lg:w-auto">
                      <a href="" target="blank">
                        <Button className="bg-[#ff0000] md:mx-4 hover:bg-[#ff0000] hover:shadow-md hover:shadow-black w-full sm:w-auto text-sm py-6">
                          Apply Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
};

export default Hero;