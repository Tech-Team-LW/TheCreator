"use client"
// import PythonLogo from "../../../../public/assets/TechStackLogo/pythonLogo.svg"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

const technologies = [
  {
    name: "Python",
    image: "/assets/TechStackLogo/pythonLogo.svg",
    category: "Programming Language",
  },
  {
    name: "Redis",
    image: "/assets/TechStackLogo/redisLogo.svg",
    category: "Database",
  },
  {
    name: "Docker",
    image: "/assets/TechStackLogo/dockerLogo.svg",
    category: "Containerization",
  },
  {
    name: "Apache",
    image:"/assets/TechStackLogo/apacheLogo.svg",
    category: "Web Server",
  },
  {
    name: "VS Code",
    image:"/assets/TechStackLogo/vscodeLogo.svg",
    category: "IDE",
  },
  {
    name: "MySQL",
    image:"/assets/TechStackLogo/mysqlLogo.svg",
    category: "Database",
  },
  {
    name: "Firebase",
    image:"/assets/TechStackLogo/firebaseLogo.svg",
    category: "Backend Platform",
  },
  {
    name: "AWS",
    image:"/assets/TechStackLogo/awsLogo.svg",
    category: "Cloud Platform",
  },
  {
    name: "Kubernetes",
    image: "/assets/TechStackLogo/kubernetesLogo.svg",
    category: "Container Orchestration",
  },
  {
    name: "React",
    image:"/assets/TechStackLogo/reactLogo.svg",
    category: "Frontend Framework",
  },
  {
    name: "MongoDB",
    image:"/assets/TechStackLogo/mogodbLogo.svg",
    category: "Database",
  },
  {
    name: "GitHub",
    image:"/assets/TechStackLogo/githubLogo.svg",
    category: "Version Control",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function TechStack() {
  return (
    <section className="container bg-black mx-auto px-4 py-8">
      <div className="grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl" >
        <div className="space-y-4">
          <h1 className="text-3xl text-white font-bold tracking-tight lg:text-4xl">
            Learn, Research, Integrate & Build Industry Live Summer Project
          </h1>
          <p className="text-muted-foreground text-base text-white">
            Master modern technologies through hands-on experience with industry-standard tools and frameworks.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {technologies.map((tech) => (
            <motion.div key={tech.name} variants={item}>
              <Card className="group relative overflow-hidden p-2 transition-all hover:shadow-lg">
                <div className="aspect-square relative flex items-center justify-center">
                  <img
                    src={tech.image || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                    <div className="text-center px-1">
                      <p className="text-white text-xs font-medium">{tech.name}</p>
                      <p className="text-white/80 text-[10px]">{tech.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

