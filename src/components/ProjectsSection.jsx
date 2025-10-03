import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectPopup from './ProjectPopup';

const ProjectsSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeCategory, setActiveCategory] = useState('web');
  
  const projects = [
    {
      title: "UD Three",
      description: "Interactive 3D web experience showcasing advanced Three.js capabilities with immersive visual effects",
      tech: ["Three.js", "React", "WebGL", "Animation"],
      image: "/projects/udThree.png",
      color: "bg-sticky-blue",
      demoUrl: "https://ud-three.vercel.app/",
      codeUrl: "https://github.com/talhaumercop"
    },
    {
      title: "Blob Interactive",
      description: "Creative blob animation and interaction system with fluid dynamics and responsive design",
      tech: ["JavaScript", "Canvas", "Animation", "CSS"],
      image: "/projects/blob.png",
      color: "bg-sticky-green",
      demoUrl: "https://blob-hi4q.vercel.app/",
      codeUrl: "https://github.com/talhaumercop"
    },
    {
      title: "Blob Mixer",
      description: "Advanced blob mixing interface with real-time visual effects and interactive controls",
      tech: ["React", "WebGL", "Shaders", "UI/UX"],
      image: "/projects/blobmixer.png",
      color: "bg-sticky-yellow",
      demoUrl: "https://devebco.vercel.app/",
      codeUrl: "https://github.com/talhaumercop"
    },
    {
      title: "Zajno Clone",
      description: "Modern web application clone featuring smooth animations and contemporary design patterns",
      tech: ["React", "Framer Motion", "CSS", "Responsive"],
      image: "/projects/zajno.png",
      color: "bg-sticky-pink",
      demoUrl: "https://zajno-neon.vercel.app/",
      codeUrl: "https://github.com/talhaumercop"
    },
    {
      title: "Interactive Game",
      description: "Engaging web-based game with dynamic gameplay mechanics and responsive user interface",
      tech: ["JavaScript", "Game Dev", "Canvas", "Interactive"],
      image: "/projects/game.png",
      color: "bg-sticky-orange",
      demoUrl: "https://game-swart-xi.vercel.app/",
      codeUrl: "https://github.com/talhaumercop"
    }
  ];

  const aiProjects = [
    {
      title: "Python Docstring and Unit Test Generator",
      description: "OpenAI-powered program that automatically generates docstrings and unit tests for Python code",
      tech: ["Python", "OpenAI", "Automation", "Testing"],
      url: "https://huggingface.co/spaces/talhafewfefefew/Python_Docstring_and_Unit_Test_Generator"
    },
    {
      title: "Summarize Website",
      description: "OpenAI-powered program that extracts and summarizes content from websites",
      tech: ["OpenAI", "Web Scraping", "NLP", "Summarization"],
      url: "https://huggingface.co/spaces/talhafewfefefew/Summarize_website"
    },
    {
      title: "Mental Health Chatbot",
      description: "RAG system with OpenAI that provides mental health support and resources",
      tech: ["RAG", "OpenAI", "Mental Health", "Chatbot"],
      url: "https://huggingface.co/spaces/talhafewfefefew/Mental-Health"
    },
    {
      title: "Pakistani Law RAG",
      description: "RAG system with OpenAI for Pakistani legal information and assistance",
      tech: ["RAG", "OpenAI", "Legal", "Information Retrieval"],
      url: "https://huggingface.co/spaces/talhafewfefefew/pakistani-law-rag"
    },
    {
      title: "AI Agent that Copies My Accent",
      description: "Voice cloning application that mimics user's accent using OpenAI SDK",
      tech: ["OpenAI SDK", "Voice Cloning", "Audio Processing"],
      url: "https://huggingface.co/spaces/talhafewfefefew/My-Accent"
    },
    {
      title: "AI Job Skills Advisor",
      description: "Real-time job search, free courses & skills comparison tool",
      tech: ["AI Agent", "Job Search", "Skills Analysis"],
      url: "https://huggingface.co/spaces/talhafewfefefew/Skill-Job-Advisor"
    },
    {
      title: "AI Customer Support Agent",
      description: "RAG System for automated customer support and assistance",
      tech: ["RAG", "Customer Support", "Automation"],
      url: "https://huggingface.co/spaces/talhafewfefefew/EMAIL-SENDER"
    },
    {
      title: "Multi-tool AI Agent",
      description: "Advanced agent using LangGraph, LangSmith, LangChain with Playwright, Serper, Pushover, and Calendar Integration",
      tech: ["LangGraph", "LangSmith", "LangChain", "Multi-tool"],
      url: "https://github.com/talhaumercop/langgraph-agent"
    },
    {
      title: "AI Website Generator",
      description: "PowerShell Commands & React Code Generator using Crew AI",
      tech: ["Crew AI", "Code Generation", "PowerShell", "React"],
      url: "https://github.com/talhaumercop/website-maker-cre"
    }
  ];

  const adImages = [
    {
      src: "/commercials/coffee.png",
      alt: "Coffee Product Ad"
    },
    {
      src: "/commercials/sneakers.jpg",
      alt: "Sneakers Product Ad"
    },
    {
      src: "/commercials/perfume.png",
      alt: "Perfume Product Ad"
    },
    {
      src: "/commercials/headphone.png",
      alt: "Headphone Product Ad"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <p className="text-lg text-gray-600 max-w-2xl body-text">
              A showcase of my projects you need to know
            </p>
            <div className="handwritten-arrow">↘</div>
          </div>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-full shadow-md p-1 flex">
            <motion.button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === 'web' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('web')}
              whileHover={{ scale: activeCategory !== 'web' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Web
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === 'ai' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('ai')}
              whileHover={{ scale: activeCategory !== 'ai' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              AI
            </motion.button>
            <motion.button
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === 'ad' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveCategory('ad')}
              whileHover={{ scale: activeCategory !== 'ad' ? 1.05 : 1 }}
              whileTap={{ scale: 0.95 }}
            >
              Ad
            </motion.button>
          </div>
        </motion.div>

        {/* Web Projects */}
        {activeCategory === 'web' && (
          <>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                  <span className="relative z-10">Web Development</span>
                  <div className="absolute inset-0 bg-blue-300 opacity-40 transform -skew-x-12 rounded-lg z-0" style={{ top: '60%', height: '30%' }}></div>
                </h3>
                <p className="text-xl text-gray-700 italic font-serif leading-relaxed">
                  Creating interactive and immersive digital experiences with modern web technologies.
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="project-card group"
                    whileHover={{ y: -8 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="absolute inset-0 hidden items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-2xl">📱</span>
                          </div>
                          <p className="text-gray-600 text-sm font-medium">Demo Image</p>
                          <p className="text-gray-500 text-xs">{project.image}</p>
                        </div>
                      </div>
                      
                      {/* Overlay with buttons */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="space-x-4">
                          <motion.button 
                            onClick={() => {
                              setShowPopup(true);
                              setTimeout(() => {
                                window.open(project.demoUrl, '_blank');
                              }, 1000);
                            }}
                            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Live Demo
                          </motion.button>
                          <motion.a 
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors inline-block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Code
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </>
        )}

        {/* AI Projects */}
        {activeCategory === 'ai' && (
          <>
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-12">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                  <span className="relative z-10">AI Solutions</span>
                  <div className="absolute inset-0 bg-purple-300 opacity-40 transform -skew-x-12 rounded-lg z-0" style={{ top: '60%', height: '30%' }}></div>
                </h3>
                <p className="text-xl text-gray-700 italic font-serif leading-relaxed">
                  Building intelligent applications that leverage the power of artificial intelligence and machine learning.
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {aiProjects.map((project, index) => (
                  <motion.a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5, backgroundColor: "#f8faff" }}
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </>
        )}

        {/* Ad Projects */}
        {activeCategory === 'ad' && (
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
                <span className="relative z-10">Creative Advertising</span>
                <div className="absolute inset-0 bg-yellow-300 opacity-40 transform -skew-x-12 rounded-lg z-0" style={{ top: '60%', height: '30%' }}></div>
              </h3>
              <p className="text-xl text-gray-700 italic font-serif leading-relaxed">
                I create professional product ads and visuals using AI tools and creative direction.
              </p>
            </div>
            <div className="space-y-12">
              {/* Ad Images Gallery */}
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {adImages.map((image, index) => (
                    <motion.div 
                      key={index}
                      className="relative group overflow-hidden rounded-xl shadow-lg"
                      whileHover={{ scale: 1.03 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white font-serif italic p-4">{image.alt}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Services Description */}
              
            </div>
          </div>
        )}

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">Want to see more projects?</p>
          <motion.a 
            href="https://github.com/talhaumercop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
      
      <ProjectPopup 
        isOpen={showPopup} 
        onClose={() => setShowPopup(false)} 
      />
    </section>
  );
};

export default ProjectsSection;