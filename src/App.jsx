import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea, Divider } from "@nextui-org/react";
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const projects = [
    {
      title: "Project One",
      description: "A beautiful web application built with React and Next.js. Features include user authentication, real-time data updates, and responsive design.",
      category: "Web Development",
      image: "https://ibb.co/hRv9TF9",
      link: "#",
      tech: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Project Two",
      description: "Brand identity design for a tech startup. Created complete visual identity including logo, color palette, typography, and marketing materials.",
      category: "Design",
      image: "https://ibb.co/VNct1ZX",
      link: "#",
      tech: ["Figma", "Illustrator", "Photoshop"]
    },
    {
      title: "Project Three",
      description: "Mobile app UI/UX design and development. Built with React Native featuring smooth animations and offline capabilities.",
      category: "Mobile",
      image: "https://ibb.co/mCd5hC9",
      link: "#",
      tech: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Project Four",
      description: "E-commerce platform with advanced filtering, search, and payment integration. Includes admin dashboard and analytics.",
      category: "Web Development",
      image: "https://ibb.co/VYPNKbc",
      link: "#",
      tech: ["Vue.js", "Node.js", "MongoDB"]
    }
  ];

  const handleCardClick = (index) => {
    setClickedCard(index);
    setTimeout(() => setClickedCard(null), 750);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Grid Effect */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"
        style={{ backgroundSize: '14px 14px' }}
      />
      
      {/* Purple Gradient Blob */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_500px_at_50%_200px,#996DFF30,#090909)]" />

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-32 relative">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            Make <span className="text-[#996DFF]">beautiful</span> websites
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Crafting digital experiences through modern design and development
          </p>
          <div className="flex gap-4">
            <Button 
              color="secondary"
              size="lg"
              className="font-semibold bg-[#996DFF] text-white hover:bg-[#8A5CF5]"
            >
              View Projects
            </Button>
            <Button
              variant="bordered"
              size="lg"
              className="font-semibold border-zinc-700 text-white hover:border-[#996DFF]"
            >
              Download CV
            </Button>
          </div>
        </div>
      </header>

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
              src="./src/assets/icon.jpg"
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
      <section className="container mx-auto px-4 py-20 relative">
        <Card className="max-w-xl mx-auto bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
          <CardBody className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
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
        <p>© 2024 Your Name. All rights reserved.</p>
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