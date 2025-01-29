import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, } from "@/components/ui/card";
import Image from "next/image"
const mediaData = [
  {
    source: "PR Newswire",
    title: "Top 25% achieved avg. CTC of ₹43 LPA: Masters' Union Placement Report '24",
    date: "15 Dec, 2024",
    backgroundImage: "/api/placeholder/400/300",
    logo: "/api/placeholder/150/50"
  },
  {
    source: "Millennium Post",
    title: "Future skills for future success adapt and grow",
    date: "30 Oct, 2024",
    backgroundImage: "/api/placeholder/400/300",
    logo: "/api/placeholder/150/50"
  },
  {
    source: "CXO Today",
    title: "Masters' Union Hosts Intersect 3.0 to Tackle Skill Gaps and Foster Innovation",
    date: "Nov 03, 24",
    backgroundImage: "/api/placeholder/400/300",
    logo: "/api/placeholder/150/50"
  },
  {
    source: "The Economic Times",
    title: "Masters' Union MBA cohort 2024 reports Rs 28.52 lakh average salary",
    date: "Nov 28, 2024",
    backgroundImage: "/api/placeholder/400/300",
    logo: "/api/placeholder/150/50"
  },
  {
    source: "Business India",
    title: "Shaping future careers",
    date: "Dec 2024",
    backgroundImage: "/api/placeholder/400/300",
    logo: "/api/placeholder/150/50"
  }
];

export default function MediaSection() {
  return (
    <div className="min-h-full w-full flex items-center justify-center bg-zinc-900 p-4">
      <div className="max-w-6xl w-full rounded-lg p-8">
        <div className="text-center mb-8">
          <span className="text-yellow-400 text-sm">✦ PIONEERING EDUCATION</span>
          <h1 className="text-3xl font-bold text-white mt-2">In the News</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaData.map((media, index) => (
            <Card 
              key={index} 
              className="relative h-44 overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${media.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              
              <CardHeader className="relative h-full flex flex-col justify-center items-center p-4">
                <Image 
                  src={media.logo}
                  alt={media.source}
                  width={100}
                  height={100}
                  className="w-36 h-24 object-contain mb-2"
                />
                <CardTitle className="text-white text-sm text-center line-clamp-2">
                  {media.title}
                </CardTitle>
                <CardDescription className="text-gray-300 text-xs mt-1">
                  {media.date}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}