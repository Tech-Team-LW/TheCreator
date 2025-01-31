import React from "react";
import { Card, CardHeader, } from "@/components/ui/card";
import Image from "next/image"
const mediaData = [
  {
    source: "PR Newswire",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Millennium Post",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "CXO Today",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "The Economic Times",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  },
  {
    source: "Business India",
    backgroundImage: "/assets/media/graduation.jpeg",
    logo: "/assets/media/mu-journalist-barkha-dutt.media.webp"
  }

];

export default function MediaSection() {
  return (
    <div className="min-h-full w-full flex items-center justify-center bg-black p-4">
      <div className="max-w-6xl w-full rounded-lg p-8">
        <div className="text-center mb-8">
          <span className="text-yellow-400 text-sm">✦ PIONEERING EDUCATION</span>
          <h1 className="text-3xl font-bold text-white mt-2">In the News</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
              
              <CardHeader className="relative h-full flex flex-col justify-center items-center pt-4 pb-0 px-4">
                <div className="relative w-full h-full">
                  <Image 
                    src={media.logo}
                    alt={media.source}
                    width={300}
                    height={100}
                    className="object-contain"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                  />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
