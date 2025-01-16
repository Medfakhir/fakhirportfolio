"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Send, Building2, Calendar, Briefcase,Cpu, Globe, Server } from "lucide-react";



const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close the mobile menu after clicking
    }
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const Logo = () => (
    <div className="relative flex items-center">
      <div className="flex items-center px-4 py-2 cursor-pointer overflow-hidden group">
        <div className="relative z-10">
          <div className="flex flex-col items-start">
            <span className="text-2xl font-light text-transparent bg-gradient-to-r from-[#ADFF00] to-white bg-clip-text transition-transform duration-300 group-hover:translate-x-2">
              Mohamed
            </span>
            <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-white to-[#ADFF00] bg-clip-text -mt-1 transition-transform duration-300 group-hover:-translate-x-2">
              Fakhir
            </span>
            <div className="h-0.5 w-0 bg-gradient-to-r from-[#ADFF00] to-white transition-all duration-300 group-hover:w-full" />
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ADFF00]/10 to-white/10 blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  );

  const navigationItems = [
    { id: "product", title: "Product Design", subtitle: "3+ Years" },
    { id: "front", title: "Front End Development", subtitle: "4+ Years" },
    { id: "back", title: "Back End Development", subtitle: "2+ Years" },
  ];

  const WorkSection = () => {
    const controls = useAnimation();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Full Stack", "Web App", "E-commerce", "AI", "Mobile App"];

    const projectData = [
      {
        id: 1,
        title: "CineZone",
        description: "Movie streaming platform with dashboard admin",
        image: `/cinezone.png`,
        demo: "https://cinezonee.vercel.app",
        github: "https://github.com/Medfakhir/cinezone",
        category: "Full Stack",
        technologies: ["React", "Prisma", "MongoDB","tailwindcss"],
        color: "from-purple-500 to-blue-500",
      },
      {
        id: 2,
        title: "Task Manager",
        description: "Collaborative task management application with real-time updates",
        image: `/taskmanager.png`,
        demo: "https://task-manager-one-gold.vercel.app",
        github: "https://github.com/Medfakhir/task-manager",
        category: "Web App",
        technologies: ["Next.js", "Localstorage", "tailwindcss"],
        color: "from-emerald-500 to-teal-500",
      },
      {
        id: 3,
        title: "QuickPick",
        description: "E-commerce platform with advanced filtering and dashboard admin",
        image: `/quickpick.png`,
        demo: "https://quickpick25.vercel.app/",
        github: "https://github.com/Medfakhir/QuickPick",
        category: "E-commerce",
        technologies: ["Nextjs", "Mongodb", "Prisma","tailwindcss"],
        color: "from-rose-500 to-pink-500",
      },
      {
        id: 4,
        title: "AI Image Pro",
        description: "AI-powered image generation and editing tool with neural networks",
        image: `/aiimagepro.png`,
        demo: "https://ai-image-pro-ochre.vercel.app/",
        github: "https://github.com/Medfakhir/AI-Image-Pro",
        category: "AI",
        technologies: ["Nextjs", "superBase", "Restapi","tailwindcss"],
        color: "from-amber-500 to-orange-500",
      },
      {
        id: 5,
        title: "Dating App",
        description: "flutter dating app",
        image: `https://user-images.githubusercontent.com/61033546/228027983-6aee3eba-c00c-4a25-a098-f105c3af696e.png`,
        demo: "https://github.com/Medfakhir/flutter-dating-app",
        github: "https://github.com/Medfakhir/flutter-dating-app",
        category: "Mobile App",
        technologies: ["flutter"],
        color: "from-amber-500 to-orange-500",
      },
    ];

    const filteredProjects =
      selectedCategory === "All"
        ? projectData
        : projectData.filter((project) => project.category === selectedCategory);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > document.getElementById("work").offsetTop - window.innerHeight / 2) {
          controls.start("visible");
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
      <motion.section
        id="work"
        className="relative py-20 overflow-hidden bg-black"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-[#ADFF00] to-white bg-clip-text text-transparent">
                  Featured Works
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ADFF00] to-transparent" />
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
              Explore my latest projects that push the boundaries of web development
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#ADFF00] text-black shadow-lg shadow-[#ADFF00]/20"
                    : "bg-gray-900 text-gray-300 hover:bg-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-[#ADFF00]">
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-black/30 rounded-full text-xs text-gray-300 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="relative h-40 rounded-lg overflow-hidden mb-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#ADFF00] text-black px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#ADFF00]/20 flex items-center justify-center gap-2 group/button text-sm"
                      >
                        <span>View Live</span>
                        <svg
                          className="w-3 h-3 transform transition-transform duration-300 group-hover/button:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  const SkillsSection = () => {
    const controls = useAnimation();
    const [hoveredSkill, setHoveredSkill] = useState(null);
  
    const skills = [
      {
        category: "Frontend",
        icon: <Globe className="w-6 h-6" />,
        skills: [
          { id: 1, name: "React", level: 90 },
          { id: 2, name: "Next.js", level: 85 },
          { id: 3, name: "JavaScript", level: 95 },
          { id: 4, name: "Tailwind CSS", level: 90 },
        ],
      },
      {
        category: "Backend",
        icon: <Server className="w-6 h-6" />,
        skills: [
          { id: 5, name: "Node.js", level: 85 },
          { id: 6, name: "DynamoDB", level: 80 },
          { id: 7, name: "MySQL", level: 75 },
          { id: 8, name: "MongoDB", level: 90 },
        ],
      },
      {
        category: "DevOps",
        icon: <Cpu className="w-6 h-6" />,
        skills: [
          { id: 9, name: "Docker", level: 70 },
          { id: 10, name: "AWS", level: 75 },
          { id: 11, name: "CI/CD", level: 80 },
        ],
      },
    ];
  
    const sectionVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          staggerChildren: 0.2
        }
      }
    };
  
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > document.getElementById("skills").offsetTop - window.innerHeight / 2) {
          controls.start("visible");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);
  
    return (
      <motion.section
        id="skills"
        className="relative py-24 bg-black"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={cardVariants}
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#ADFF00] to-white bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ADFF00] to-transparent mx-auto" />
          </motion.div>
  
          <div className="space-y-16">
            {skills.map((category) => (
              <motion.div 
                key={category.category}
                variants={cardVariants}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-[#ADFF00]/10 text-[#ADFF00]">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {category.category}
                  </h3>
                </div>
  
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="relative p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      whileHover={{ y: -5 }}
                      onMouseEnter={() => setHoveredSkill(skill.id)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-white">{skill.name}</span>
                          <span className="text-[#ADFF00] font-mono">{skill.level}%</span>
                        </div>
  
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#ADFF00] to-[#7FB300] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
  
                      <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-[#ADFF00]/50 transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  const ExperienceSection = () => {
    const controls = useAnimation();
  
    const experiences = [
      {
        id: 1,
        date: "July - August 2020",
        mission: "Creation of a web-based e-learning platform for OFPPT trainees.",
        technologies: ["PHP Native", "Bootstrap"],
        company: "ISTA NTIC SYBA, MARRAKECH",
      },
      {
        id: 2,
        date: "April - August 2024",
        mission: "Development of a social media application for web and mobile platforms.",
        technologies: ["React", "Next.js", "AWS Services", "Tailwind CSS"],
        company: "METAVERSE, CASABLANCA",
      },
      {
        id: 3,
        date: "July - August 2021",
        mission: "Design and implementation of an online real estate management platform.",
        technologies: ["Laravel", "Angular", "Bootstrap"],
        company: "HADAIK EL YASSAMIN, MARRAKECH",
      },
    ];
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > document.getElementById("experience").offsetTop - window.innerHeight / 2) {
          controls.start("visible");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);
  
    const sectionVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      }
    };
  
    const lineVariants = {
      hidden: { scaleY: 0, originY: 0 },
      visible: { 
        scaleY: 1,
        transition: { 
          duration: 1.5,
          ease: "easeInOut"
        }
      }
    };
  
    return (
      <motion.section
        id="experience"
        className="relative py-20 overflow-hidden bg-black"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-[#ADFF00] to-white bg-clip-text text-transparent">
                  Professional Experience
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ADFF00] to-transparent" />
              </h2>
              <p className="text-gray-400 mt-4">My journey in the tech industry</p>
            </div>
          </div>
  
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline content */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-[#ADFF00] transition-all duration-500 group">
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <Calendar size={16} className="text-[#ADFF00]" />
                        <span className="text-sm">{experience.date}</span>
                      </div>
  
                      <div className="flex items-center gap-2 mb-4">
                        <Building2 size={16} className="text-[#ADFF00]" />
                        <h4 className="text-white font-medium">{experience.company}</h4>
                      </div>
  
                      <div className="flex items-start gap-2 mb-4">
                        <Briefcase size={16} className="text-[#ADFF00] mt-1" />
                        <p className="text-gray-300">{experience.mission}</p>
                      </div>
  
                      <div className="flex flex-wrap gap-2 mt-4">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-black/30 rounded-full text-xs text-[#ADFF00] border border-[#ADFF00]/20 group-hover:border-[#ADFF00]/40 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Timeline line (now in front of cards) */}
            <motion.div 
              className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-[#ADFF00] to-transparent"
              style={{ 
                transformOrigin: "top",
                zIndex: 20 
              }}
              variants={lineVariants}
              initial="hidden"
              animate={controls}
            />
  
            {/* Timeline nodes (in front of line) */}
            {experiences.map((_, index) => (
              <div
                key={index}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-black border-2 border-[#ADFF00] rounded-full flex items-center justify-center"
                style={{ 
                  top: `${index * 224}px`,
                  zIndex: 30
                }}
              />
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  const ContactSection = () => {
    const controls = useAnimation();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
    const [submitted, setSubmitted] = useState(false); // Track form submission
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > document.getElementById("contact").offsetTop - window.innerHeight / 2) {
          controls.start("visible");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Replace with your Formspree endpoint
      const formspreeEndpoint = 'https://formspree.io/f/mpwwezez';
  
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          setSubmitted(true); // Show success message
          setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Clear form
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <motion.section
        id="contact"
        className="relative py-20 overflow-hidden bg-black"
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl font-bold mb-4 relative">
                <span className="bg-gradient-to-r from-[#ADFF00] to-white bg-clip-text text-transparent">
                  Let's Build Something Together
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#ADFF00] to-transparent" />
              </h2>
              <p className="text-gray-400 mt-4">Got a project in mind? Let's discuss how we can help!</p>
            </div>
          </div>
  
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-[#ADFF00] transition-all duration-500">
              {submitted ? (
                <div className="text-center text-[#ADFF00]">
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 ml-1">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="w-full bg-black/50 rounded-xl p-4 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#ADFF00] transition-all duration-300"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 ml-1">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full bg-black/50 rounded-xl p-4 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#ADFF00] transition-all duration-300"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full bg-black/50 rounded-xl p-4 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#ADFF00] transition-all duration-300"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Message</label>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full bg-black/50 rounded-xl p-4 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#ADFF00] transition-all duration-300"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
  
                  <button
                    type="submit"
                    className="w-full bg-[#ADFF00] text-black p-4 rounded-xl font-medium hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#ADFF00]/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
  
            <div className="mt-12 text-center">
              <p className="text-gray-400">
                Or reach out directly via email at{" "}
                <a
                  href="mailto:Mohamed.fakhirfakhir@gmail.com"
                  className="text-[#ADFF00] hover:underline"
                >
                  mohamed.fakhirfakhir@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#ADFF00] to-yellow-400 rounded-full opacity-10 blur-3xl" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Logo />

            <button
              className="w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 w-full h-0.5 bg-white top-3 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 w-full h-0.5 bg-white transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 pt-24">
          <div className="flex flex-col space-y-8 text-center">
            <a
              href="#work"
              className="text-2xl text-white hover:text-[#ADFF00] transition"
              onClick={() => scrollToSection("work")}
            >
              Work
            </a>
            <a
              href="#skills"
              className="text-2xl text-white hover:text-[#ADFF00] transition"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-2xl text-white hover:text-[#ADFF00] transition"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-2xl text-white hover:text-[#ADFF00] transition"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <main className="pt-20">
        <section className="container mx-auto px-4 pt-16 pb-32 relative">
          <div className="text-center mb-16 md:mb-32 relative">
  {/* Background Glow Effect */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ADFF00] opacity-10 blur-[50px] md:blur-[100px] rounded-full animate-glow" />

  {/* Profile Image Container */}
  <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 md:mb-12 animate-float">
    {/* Spotlight Gradient */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#ADFF00] to-transparent opacity-20 animate-spotlight" />

    {/* Profile Image */}
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <img
        src="/profile.png"
        alt="Profile"
        className="w-full h-full object-cover rounded-full"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>

    {/* Decorative Dots */}
    <div className="absolute -right-2 -top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#ADFF00] blur-[1px] md:blur-[2px] animate-glow" />
    <div className="absolute -left-1 -bottom-1 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#ADFF00] blur-[1px] animate-glow" />
  </div>

  {/* Text Content */}
  <div className="space-y-4 md:space-y-6 animate-fade-in">
    <div className="relative inline-block">
      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-typing">
        Hey, I'm Mohamed Fakhir Fakhir.
      </h1>
    </div>

    <p
      className="text-xl md:text-2xl text-gray-400 opacity-0 animate-fade-in"
      style={{ animationDelay: "3.5s", animationFillMode: "forwards" }}
    >
      Full Stack Developer
    </p>

    <button
      className="bg-[#ADFF00] text-black px-6 py-2 md:px-8 md:py-3 rounded-full font-medium opacity-0 animate-fade-in hover:shadow-[0_0_20px_rgba(173,255,0,0.3)] transition-shadow"
      style={{ animationDelay: "4s", animationFillMode: "forwards" }}
    >
      Available for Work
    </button>
  </div>
</div>

{/* Navigation Cards */}
<div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto relative gap-4 md:gap-0">
  {/* Animated Line (Hidden on Mobile) */}
  <div className="hidden md:block absolute top-1/2 left-0 w-full h-24 -mt-12 z-0">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 0,50 Q 400,100 800,50"
        stroke="#ADFF00"
        strokeWidth="2"
        fill="none"
        className="opacity-20"
      />
      <path
        d="M 0,50 Q 400,100 800,50"
        stroke="#ADFF00"
        strokeWidth="3"
        fill="none"
        className="animate-flow"
        filter="url(#glow)"
      />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feFlood floodColor="#ADFF00" floodOpacity="0.5" />
          <feComposite in2="blur" operator="in" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  </div>

  {/* Navigation Cards */}
  {navigationItems.map((item, index) => (
    <div
      key={item.id}
      className="relative z-10 bg-[#0A0A0A] p-4 md:p-6 rounded-lg w-full md:w-64 hover:bg-gray-800 transition-all duration-300 cursor-pointer border border-gray-800 hover:border-[#ADFF00] group"
    >
      {/* Glowing Dot */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#ADFF00] rounded-full shadow-[0_0_10px_#ADFF00]" />

      {/* Card Content */}
      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-[#ADFF00] transition-colors">
        {item.title}
      </h3>
      <p className="text-sm md:text-base text-gray-400">{item.subtitle}</p>
    </div>
  ))}
</div>
     
        </section>

        <WorkSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />

        <footer className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 w-full">
            <svg
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              viewBox="0 0 1200 300"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 100,200 Q 600,350 1100,200"
                stroke="#FF4040"
                strokeWidth="2"
                fill="none"
                className="opacity-50"
              />
              <path
                d="M 150,180 Q 600,300 1050,180"
                stroke="#ADFF00"
                strokeWidth="2"
                fill="none"
                className="opacity-50"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8">
              <Logo />

              <nav className="flex flex-wrap justify-center gap-8 text-sm">
                <a
                  href="#work"
                  className="text-gray-400 hover:text-[#ADFF00] transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("work");
                  }}
                >
                  Work
                </a>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-[#ADFF00] transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("skills");
                  }}
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-[#ADFF00] transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                  }}
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#ADFF00] transition-all duration-300 hover:scale-105"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </nav>

              <div className="flex space-x-6">
                <a
                  href="https://x.com/MohamedFakhirF1"
                  className="text-gray-400 hover:text-[#ADFF00] transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Medfakhir"
                  className="text-gray-400 hover:text-[#ADFF00] transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/fakhirfakhir/"
                  className="text-gray-400 hover:text-[#ADFF00] transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>

              <div className="text-sm text-gray-400">© 2024 Med Fakhir Fakhir. All rights reserved.</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;