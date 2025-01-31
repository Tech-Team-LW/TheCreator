import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const benefitsData = [
  {
    icon: "🎓",
    title: "100% Sponsorship",
    subtitle: "International Conferences & Summits",
    detail: "Time to meet the Creators of the technologies",
    description:
      "Lifetime Opportunity to visit International conference where you meet the creators of different upcoming technologies, know the Future booming technical concepts, experience a different technical approach & also get unbelievable job opportunities.",
  },
  {
    icon: "📚",
    title: "Connect with",
    subtitle: "Communities & Industry Experts",
    detail: "Get Connected - Get Inspired",
    description:
      "An Opportunity to meet in person & get connected with many industry experts here during the Summer Program. Also know the path to contribute to major communities namely AWS Community, Docker Community, OpenSource Community & many more.",
  },
  {
    icon: "🌟",
    title: "Teamwork",
    subtitle: "& Collaboration",
    detail: "Exposure to real industry work culture",
    description:
      "Interns from PAN India Engineering Colleges participate in the Summer Program & while doing your projects you all will be working closely with each other which will help you learn team synergy, how to work collaboratively as a team & team building skills.",
  },
  {
    icon: "💼",
    title: "Build",
    subtitle: "Interpersonal Skills",
    detail: "Become Confident & Interview Ready",
    description:
      "Work on real-world projects that enhance your portfolio and give you practical experience in your field.",
  },
  {
    icon: "🤝",
    title: "Problem Based",
    subtitle: "Learning Approach",
    detail: "Develop Problem Solving Skills",
    description:
      "The problem-based project work @ THE CREATOR 2025 gives you a unique opportunity to acquire new knowledge and technical competences in an independent manner. You get to apply theory to practice when you work to solve real-life problems, and you will be well prepared for your future career.",
  },
];

export default function Benifits() {
  return (
    <div className="min-h-full w-full flex items-center justify-center bg-black p-4">
      <div className="max-w-6xl w-full bg-black rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          Benefits of Summer Program 2025
        </h1>
        <h2 className="text-xl text-center text-white mb-8">
          Learn with Engineering students from Across India
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsData.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <span className="text-4xl">{benefit.icon}</span>
                <CardTitle className="text-2xl text-blue-800">{benefit.title}</CardTitle>
                <CardDescription className="text-lg text-blue-600">{benefit.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-gray-700 font-semibold">{benefit.detail}</h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          {benefitsData.slice(3).map((benefit, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow flex-1">
              <CardHeader className="text-center">
                <span className="text-4xl">{benefit.icon}</span>
                <CardTitle className="text-2xl text-blue-800">{benefit.title}</CardTitle>
                <CardDescription className="text-lg text-blue-600">{benefit.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-gray-700 font-semibold">{benefit.detail}</h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}