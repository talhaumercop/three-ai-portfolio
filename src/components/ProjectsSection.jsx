import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectPopup from './ProjectPopup';

const ProjectsSection = () => {
  const [showPopup, setShowPopup] = useState(false);
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
              A showcase of interactive web experiences and modern web applications
            </p>
            <div className="handwritten-arrow">↘</div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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