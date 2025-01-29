"use client";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export default function VideoTestimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // First card will be expanded by default
  useEffect(() => {
    setHoveredIndex(0);
  }, []);

  
  const videos: VideoCardProps[] = [
    {
      title: "Don't Join Summer Internship 2025 without Watching...",
      thumbnail: "https://deen3evddmddt.cloudfront.net/images/home-images/Jayant_Ranawat.webp",
      videoUrl: "https://www.youtube.com/watch?v=GCX02RwZ5dk"
    },
    {
        title: "Don't Join Summer Internship 2025 without Watching...",
        thumbnail: "https://deen3evddmddt.cloudfront.net/images/home-images/Jitesh_Bhojwani.webp",
        videoUrl: "https://www.youtube.com/watch?v=GCX02RwZ5dk"
      },
      {
        title: "Don't Join Summer Internship 2025 without Watching...",
        thumbnail: "https://deen3evddmddt.cloudfront.net/images/home-images/Jigyasa_Kanwar.webp",
        videoUrl: "https://www.youtube.com/watch?v=GCX02RwZ5dk"
      },
      {
        title: "Don't Join Summer Internship 2025 without Watching...",
        thumbnail: "https://deen3evddmddt.cloudfront.net/images/home-images/Pushpendra_Singh_Rathore.webp",
        videoUrl: "https://www.youtube.com/watch?v=GCX02RwZ5dk"
      },
      {
        title: "Don't Join Summer Internship 2025 without Watching...",
        thumbnail: "https://deen3evddmddt.cloudfront.net/images/home-images/Jigyasa_Kanwar.webp",
        videoUrl: "https://www.youtube.com/watch?v=GCX02RwZ5dk"
      },
    // Add other video objects here
  ];

  return (
    <div className="max-w-full px-4 md:px-8 py-12">
      <header className="mb-8 space-y-2">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tight">
            Hear it From Our Learners
          </h1>
          <span className="bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
            Testimonials
          </span>
        </div>
        <p className="text-gray-600 text-lg">
          Tech Alumni Stories, You can't afford to miss.
        </p>
      </header>

      <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide">
        {videos.map((video, index) => (
          <Card
            key={index}
            className={`relative h-[450px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out ${
              hoveredIndex === index 
                ? "w-[350px] shadow-xl -translate-y-2 z-10"
                : "w-[200px] shadow-md"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(0)} // Reset to first card on mouse leave
            onClick={() => window.open(video.videoUrl, "_blank")}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded-xl"
            />
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-xl" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white/90 p-4 rounded-full hover:bg-white hover:scale-110 transition-transform">
                <Play className="w-6 h-6 fill-foreground/90" />
              </div>
            </div>
            
            <p className="absolute bottom-4 left-4 text-white font-medium text-sm line-clamp-3">
              {video.title}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}