import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea, Divider } from "@nextui-org/react";
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
// https://ibb.co/bmCDxS4
// https://ibb.co/gRVxD0B
// https://ibb.co/NsLsSqz
// https://ibb.co/jbdvkSs
const Portfolio = () => {
  const [clickedCard, setClickedCard] = useState(null);

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
      {/* Base Linear Gradient */}
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom_right,#13151C,#1A1C27)]" />
      
      {/* Ambient Gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#996DFF15,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B096815,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#00000080_100%)]" />
      </div>

      {/* Grid Overlay */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
        style={{ backgroundSize: '14px 14px' }}
      />
      
      {/* Mesh Wave Effect */}
      <div className="fixed bottom-0 left-0 w-full h-[600px] z-0">
        <svg
          className="w-full h-full opacity-20"
          viewBox="0 0 1440 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 500 Q 360 400 720 500 Q 1080 600 1440 500 L 1440 700 L 0 700 Z"
            fill="url(#gradient)"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M 0 500 Q 360 400 720 500 Q 1080 600 1440 500 L 1440 700 L 0 700 Z;
                M 0 500 Q 360 600 720 500 Q 1080 400 1440 500 L 1440 700 L 0 700 Z;
                M 0 500 Q 360 400 720 500 Q 1080 600 1440 500 L 1440 700 L 0 700 Z
              "
            />
          </path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#996DFF', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#3B0968', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

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
              <div className="absolute inset-0 bg-gradient-to-br from-[#996DFF10] to-transparent rounded-xl"></div>
              <div className="bg-[#13151C]/80 backdrop-blur-md rounded-xl border border-zinc-800/50 p-8">
                <h3 className="text-2xl font-semibold mb-8">Expertise</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-zinc-300">Frontend Development</p>
                      <span className="text-[#996DFF]">90%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#996DFF] to-[#8A5CF5] h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-zinc-300">UI/UX Design</p>
                      <span className="text-[#996DFF]">85%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#996DFF] to-[#8A5CF5] h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <p className="text-zinc-300">Backend Integration</p>
                      <span className="text-[#996DFF]">75%</span>
                    </div>
                    <div className="w-full bg-zinc-800/50 rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#996DFF] to-[#8A5CF5] h-2 rounded-full w-[75%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
          {/* Ambient Gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#996DFF15,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#3B096815,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#00000080_100%)]" />
      </div>

      {/* Grid Overlay */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
        style={{ backgroundSize: '14px 14px' }}
      />
      {/* Project Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                clickedCard === index ? 'glow-effect' : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <CardHeader className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover"
                />
              </CardHeader>
              <CardBody className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl text-white font-bold">{project.title}</h3>
                  <Button
                    isIconOnly
                    variant="light"
                    className="text-zinc-400 hover:text-[#996DFF]"
                  >
                    <ExternalLink size={20} />
                  </Button>
                </div>
                <p className="text-zinc-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-zinc-800 rounded-full text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardBody>
              <CardFooter>
                <Button 
                  color="secondary"
                  variant="flat" 
                  size="sm" 
                  radius="full"
                  className="bg-[#996DFF]/10 text-[#996DFF]"
                >
                  {project.category}
                </Button>
              </CardFooter>
            </Card>
          ))}
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
            <h2 className="text-3xl text-white font-bold mb-6 text-center">Get in Touch</h2>
            <form className="space-y-6">
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