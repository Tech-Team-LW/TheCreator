import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { data } from "./data";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      projectRefs.current.forEach((ref, index) => {
        if (ref && ref.offsetTop <= scrollPosition && 
            (index === projectRefs.current.length - 1 || 
             projectRefs.current[index + 1].offsetTop > scrollPosition)) {
          setActiveProject(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderProject = (project, index) => {
    const isEven = index % 2 === 0;
    
    const imageContent = (
      <div className="w-full max-w-[400px] mx-auto">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={data.image.width}
          height={data.image.height}
          className="w-full h-auto rounded-lg object-cover"
          priority={data.image.priority}
        />
      </div>
    );

    const projectContent = (
      <div className="space-y-4">
        <div className="space-y-4 bg-[#202020] p-4 rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
            {project.title}
          </h2>
          <p className="text-sm md:text-base text-white">{project.description}</p>
        </div>
        {project.sections.map((section, idx) => (
          <div key={idx} className="text-white">
            <h3 className="text-lg md:text-xl font-bold text-[#ff0000]">
              {section.heading}:
            </h3>
            <p className="text-sm md:text-base text-white">{section.content}</p>
          </div>
        ))}
      </div>
    );

    return (
      <div 
        ref={el => projectRefs.current[index] = el}
        key={index} 
        className="grid grid-cols-1 gap-6 md:grid-cols-2 min-h-screen items-center py-12"
      >
        {isEven ? (
          <>
            <div className="md:sticky md:top-20 md:h-[calc(100vh-80px)] flex items-center">
              {imageContent}
            </div>
            <div className="flex flex-col space-y-6">
              {projectContent}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col space-y-6">
              {projectContent}
            </div>
            <div className="md:sticky md:top-20 md:h-[calc(100vh-80px)] flex items-center">
              {imageContent}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container bg-black w-screen mx-auto relative min-h-full">
      {/* Render Projects */}
      {data.projects.map((project, index) => renderProject(project, index))}

      {/* Render Button */}
      <div className="flex justify-center py-12">
        <Button size="lg" className="bg-[#ff0000] hover:bg-[#e00000] text-white">
          {data.button.text}
        </Button>
      </div>

      {/* Render Additional Sections */}
      <div className="space-y-12 py-12">
        {data.additionalSections.map((section, index) => (
          <section key={index} className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#ff0000]">
              {section.title}
            </h2>
            <div className="space-y-2">
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="text-sm md:text-base text-white">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}