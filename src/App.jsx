import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea, Divider } from "@nextui-org/react";
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
// https://ibb.co/bmCDxS4
// https://ibb.co/gRVxD0B
// https://ibb.co/NsLsSqz
// https://ibb.co/jbdvkSs
const Portfolio = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const skills = [
    { name: "Frontend Development", percentage: 90 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Backend Integration", percentage: 75 },
    { name: "React/Next.js", percentage: 88 },
    { name: "Responsive Design", percentage: 92 }
  ];

  const projects = [
    {
      title: "Project One",
      description: "A beautiful web application built with React and Next.js. Features include user authentication, real-time data updates, and responsive design.",
      category: "Web Development",
      image: "https://i.ibb.co/DWvTNxB/nextJS.jpg",
      link: "#",
      tech: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Project Two",
      description: "Brand identity design for a tech startup. Created complete visual identity including logo, color palette, typography, and marketing materials.",
      category: "Design",
      image: "https://i.ibb.co/CH2fnjT/textstarup.jpg",
      link: "#",
      tech: ["Figma", "Illustrator", "Photoshop"]
    },
    {
      title: "Project Three",
      description: "Mobile app UI/UX design and development. Built with React Native featuring smooth animations and offline capabilities.",
      category: "Mobile",
      image: "https://i.ibb.co/1L9L6Nx/mobile-UIUX.jpg",
      link: "#",
      tech: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Project Four",
      description: "E-commerce platform with advanced filtering, search, and payment integration. Includes admin dashboard and analytics.",
      category: "Web Development",
      image: "https://i.ibb.co/BcmV29F/ecom.jpg",
      link: "#",
      tech: ["Vue.js", "Node.js", "MongoDB"]
    }
  ];

  const handleCardClick = (index) => {
    setClickedCard(index);
    setTimeout(() => setClickedCard(null), 750);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-hidden">
            {/* Grid Overlay */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
        style={{ backgroundSize: '14px 14px' }}
      />
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Make <span className="text-[#996DFF]">beautiful</span><br />
                  websites
                </h1>
                <p className="text-xl text-zinc-400">
                  Crafting digital experiences through modern design and development
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-[#996DFF] text-xl">•</span>
                  <span className="text-zinc-300">Responsive web applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#996DFF] text-xl">•</span>
                  <span className="text-zinc-300">Custom UI/UX design</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#996DFF] text-xl">•</span>
                  <span className="text-zinc-300">Modern tech stack</span>
                </li>
              </ul>

              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-[#996DFF] text-white hover:bg-[#8A5CF5] px-8"
                >
                  View Projects
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-zinc-800 text-white hover:border-[#996DFF] px-8"
                >
                  Download CV
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative mt-8 lg:mt-0">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#996DFF10] to-transparent rounded-xl" />
      
      {/* Main content container */}
      <div className="relative bg-[#13151C]/80 backdrop-blur-md rounded-xl border border-zinc-800/50 p-8">
        <h3 className="text-2xl font-semibold mb-8 text-white">Expertise</h3>
        
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-2">
                <p className="text-zinc-300 font-medium">{skill.name}</p>
                <span className="text-[#996DFF] font-semibold">{skill.percentage}%</span>
              </div>
              
              {/* Progress bar container */}
              <div className="w-full bg-zinc-800/50 rounded-full h-2.5 overflow-hidden">
                {/* Animated progress bar */}
                <div 
                  className="bg-gradient-to-r from-[#996DFF] to-[#8A5CF5] h-full rounded-full transition-all duration-500 ease-out group-hover:scale-x-105 origin-left"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
        </header>
      </div>

      {/* Project Section */}
      <section className="container mx-auto px-4 py-20 relative">
      {/* Background glow effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#996DFF]/5 via-transparent to-transparent" /> */}
      
      <h2 className="text-4xl font-bold mb-16 text-center text-white relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#996DFF] to-[#8A5CF5]">
          Featured Projects
        </span>
      </h2>

      {/* Timeline line */}
      <div className="absolute left-1/2 top-40 bottom-20 w-px bg-gradient-to-b from-[#996DFF] to-transparent" />

      <div className="relative space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={index}
              className="flex items-center gap-8"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                <div className={`w-4 h-4 rounded-full bg-[#996DFF] transition-all duration-300 ${
                  hoveredIndex === index ? 'scale-150' : ''
                }`}>
                  <div className="absolute inset-0 rounded-full bg-[#996DFF] animate-ping opacity-50" />
                </div>
              </div>

              {/* Left side */}
              <div className="w-1/2 h-72">
                {isEven ? (
                  <div className="h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 
                    transition-all duration-500 relative group h-full flex flex-col
                    hover:border-[#996DFF]/50 hover:scale-[1.01] hover:shadow-[0_0_40px_5px_#996DFF]">

                    <CardBody className="p-6 relative flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl text-white font-bold">{project.title}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-zinc-400 hover:text-[#996DFF] transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Button>
                        </div>
                        <p className="text-zinc-400 mb-6">{project.description}</p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-sm bg-zinc-800/80 rounded-full text-zinc-300
                                transition-colors duration-300 hover:bg-[#996DFF]/20 hover:text-[#996DFF]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full bg-[#996DFF]/10 text-[#996DFF] hover:bg-[#996DFF]/20
                            transition-all duration-300"
                        >
                          {project.category}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                )}
              </div>

              {/* Right side */}
              <div className="w-1/2 h-72">
                {isEven ? (
                  <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 
                    transition-all duration-500 relative group h-full flex flex-col
                    hover:border-[#996DFF]/50 hover:scale-[1.01] hover:shadow-xl hover:shadow-[0_0_40px_5px_#996DFF]">
                    <CardBody className="p-6 relative flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl text-white font-bold">{project.title}</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-zinc-400 hover:text-[#996DFF] transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Button>
                        </div>
                        <p className="text-zinc-400 mb-6">{project.description}</p>
                      </div>
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-sm bg-zinc-800/80 rounded-full text-zinc-300
                                transition-colors duration-300 hover:bg-[#996DFF]/20 hover:text-[#996DFF]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full bg-[#996DFF]/10 text-[#996DFF] hover:bg-[#996DFF]/20
                            transition-all duration-300"
                        >
                          {project.category}
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                ) : (
                  <div className="h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>

      {/* Profile Section with Image */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://i.ibb.co/wrxHYvm/icon.jpg"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-2 border-[#996DFF]"
            />
          </div>
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <p className="text-zinc-400 text-lg mb-8">
            I'm a passionate developer and designer with over 5 years of experience 
            creating stunning digital experiences. I specialize in React, Next.js, 
            and modern web technologies.
          </p>
          <div className="flex justify-center space-x-6">
            <Button 
              isIconOnly 
              variant="light" 
              aria-label="Github"
              className="text-zinc-400 hover:text-[#996DFF]"
            >
              <Github size={24} />
            </Button>
            <Button 
              isIconOnly 
              variant="light" 
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-[#996DFF]"
            >
              <Linkedin size={24} />
            </Button>
            <Button 
              isIconOnly 
              variant="light" 
              aria-label="Email"
              className="text-zinc-400 hover:text-[#996DFF]"
            >
              <Mail size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-10 relative">
        <Card className="max-w-xl mx-auto bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
          <CardBody className="p-8">
            <h2 className="text-3xl text-white font-bold mb-6 text-center">Get in Touch </h2>
            <form className="space-y-6 text-white">
              <Input
                label="Name"
                variant="bordered"
                radius="sm"
                classNames={{
                  input: "bg-zinc-900",
                  label: "text-zinc-400",
                  inputWrapper: "border-zinc-700 hover:border-[#996DFF]"
                }}
              />
              <Input
                label="Email"
                type="email"
                variant="bordered"
                radius="sm"
                classNames={{
                  input: "bg-zinc-900",
                  label: "text-zinc-400",
                  inputWrapper: "border-zinc-700 hover:border-[#996DFF]"
                }}
              />
              <Textarea
                label="Message"
                variant="bordered"
                radius="sm"
                minRows={4}
                classNames={{
                  input: "bg-zinc-900",
                  label: "text-zinc-400",
                  inputWrapper: "border-zinc-700 hover:border-[#996DFF]"
                }}
              />
              <Button 
                color="secondary"
                size="lg"
                className="w-full bg-[#996DFF] text-white hover:bg-[#8A5CF5]"
              >
                Send Message
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-zinc-400 relative">
        <Divider className="mb-8 bg-zinc-800" />
        <p>© 2024 Chaitanya. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        .glow-effect {
          animation: glow 0.75s ease-in-out;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 0 0 rgba(153, 109, 255, 0);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(153, 109, 255, 0.3);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(153, 109, 255, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;