import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea, Divider } from "@nextui-org/react";
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

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

  const [activeIndices, setActiveIndices] = useState(new Set());
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = observerRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIndices((prev) => new Set([...prev, index]));
            } else {
              setActiveIndices((prev) => {
                const next = new Set(prev);
                next.delete(index);
                return next;
              });
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: "-20% 0px -20% 0px"
        }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);


  return (
    <div className="min-h-screen bg-[#000000] text-white relative overflow-x-hidden">
      {/* Grid Overlay */}
      <div 
    className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]"
    style={{ backgroundSize: '15px 15px' }} 
      />

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="container mx-auto px-8 py-32"> {/* Increased padding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start max-w-7xl mx-auto"> {/* Increased max width and gap */}
            {/* Left Column */}
            <div className="space-y-12"> {/* Increased spacing */}
              <div className="space-y-8">
                <h1 className="text-7xl lg:text-8xl font-bold leading-tight"> {/* Increased font size */}
                  Make <span className="text-[#996DFF]">beautiful</span><br />
                  websites
                </h1>
                <p className="text-2xl text-zinc-400"> {/* Increased font size */}
                  Crafting digital experiences through modern design and development
                </p>
              </div>
              
              <ul className="space-y-6"> {/* Increased spacing */}
                <li className="flex items-center gap-4">
                  <span className="text-[#996DFF] text-3xl">•</span> {/* Increased bullet size */}
                  <span className="text-zinc-300 text-xl">Responsive web applications</span> {/* Increased font size */}
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-[#996DFF] text-3xl">•</span>
                  <span className="text-zinc-300 text-xl">Custom UI/UX design</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-[#996DFF] text-3xl">•</span>
                  <span className="text-zinc-300 text-xl">Modern tech stack</span>
                </li>
              </ul>

              <div className="flex gap-6 pt-6"> {/* Increased gap and padding */}
                <Button 
                  size="lg"
                  className="bg-[#996DFF] text-white hover:bg-[#8A5CF5] px-12 py-6 text-xl" 
                >
                  View Projects
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="border-zinc-800 text-white hover:border-[#996DFF] px-12 py-6 text-xl"
                >
                  Download CV
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#996DFF10] to-transparent rounded-xl" />
              <div className="relative bg-[#13151C]/80 backdrop-blur-md rounded-xl border border-zinc-800/50 p-12"> {/* Increased padding */}
                <h3 className="text-3xl font-semibold mb-12 text-white">Expertise</h3> {/* Increased font size and margin */}
                <div className="space-y-8"> {/* Increased spacing */}
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-3">
                        <p className="text-zinc-300 font-medium text-xl">{skill.name}</p> {/* Increased font size */}
                        <span className="text-[#996DFF] font-semibold text-xl">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-zinc-800/50 rounded-full h-3 overflow-hidden"> {/* Increased height */}
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
      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative">
      <h2 className="text-4xl sm:text-6xl font-bold mb-12 sm:mb-24 text-center text-white relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#996DFF] to-[#8A5CF5]">
          Featured Projects
        </span>
      </h2>

      {/* Timeline line */}
      <div className="hidden sm:block absolute left-1/2 top-36 bottom-28 w-0.5 bg-gradient-to-b from-[#996DFF] to-[#996DFF]/20" />

      <div className="relative space-y-12 sm:space-y-24">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === projects.length - 1;
          const isActive = activeIndices.has(index);
          
          return (
            <div
              key={index}
              ref={el => observerRefs.current[index] = el}
              className="flex flex-col sm:flex-row items-center sm:gap-8 lg:gap-32 relative"
            >
              {/* Vertical connector line to dot */}
              {!isLast && (
                <div className={`hidden sm:block absolute left-1/2 top-[140px] w-0.5 h-24 
                  bg-gradient-to-b from-[#996DFF]/20 to-[#996DFF] transition-opacity duration-500
                  ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                />
              )}
              
              {/* Timeline dot with glow effect */}
              <div className="hidden sm:block absolute left-1/2 top-[140px] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6">
                <div className={`w-6 h-6 rounded-full transition-all duration-500 relative
                  ${isActive ? 'bg-[#996DFF] scale-125' : 'bg-[#996DFF]/40 scale-100'}`}>
                  {isActive && (
                    <>
                      <div className="absolute inset-0 rounded-full bg-[#996DFF] animate-ping opacity-50" />
                      <div className="absolute inset-[-8px] rounded-full bg-[#996DFF]/30 animate-pulse" />
                    </>
                  )}
                  {/* Horizontal connector lines */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-0.5 
                    bg-gradient-to-r from-[#996DFF] to-transparent -left-8
                    transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                  />
                  <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-0.5 
                    bg-gradient-to-l from-[#996DFF] to-transparent -right-8
                    transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                  />
                </div>
              </div>

          {/* Project content wrapper */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-4rem)]">
            {isEven ? (
              <div className="aspect-[16/9] sm:aspect-auto sm:h-[280px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ) : (
              <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 
                transition-all duration-500 relative group sm:h-[280px]
                hover:border-[#996DFF]/50 hover:scale-[1.01] hover:shadow-[0_0_60px_8px_#996DFF]">
                <CardBody className="p-6 relative h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl sm:text-2xl text-white font-bold">{project.title}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-400 hover:text-[#996DFF] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-400 mb-4 flex-grow line-clamp-3">{project.description}</p>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs sm:text-sm bg-zinc-800/80 rounded-full text-zinc-300
                              transition-colors duration-300 hover:bg-[#996DFF]/20 hover:text-[#996DFF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full sm:w-auto h-8 rounded-full bg-[#996DFF]/10 text-[#996DFF] text-sm hover:bg-[#996DFF]/20
                          transition-all duration-300"
                      >
                        {project.category}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            )}
          </div>

          {/* Second half */}
          <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-4rem)]">
            {isEven ? (
              <Card className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 
                transition-all duration-500 relative group sm:h-[280px]
                hover:border-[#996DFF]/50 hover:scale-[1.01] hover:shadow-[0_0_60px_8px_#996DFF]">
                <CardBody className="p-6 relative h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl sm:text-2xl text-white font-bold">{project.title}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-400 hover:text-[#996DFF] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Button>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-400 mb-4 flex-grow line-clamp-3">{project.description}</p>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs sm:text-sm bg-zinc-800/80 rounded-full text-zinc-300
                              transition-colors duration-300 hover:bg-[#996DFF]/20 hover:text-[#996DFF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full sm:w-auto h-8 rounded-full bg-[#996DFF]/10 text-[#996DFF] text-sm hover:bg-[#996DFF]/20
                          transition-all duration-300"
                      >
                        {project.category}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ) : (
              <div className="aspect-[16/9] sm:aspect-auto sm:h-[280px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl"
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