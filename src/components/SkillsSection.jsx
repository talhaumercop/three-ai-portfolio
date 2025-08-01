import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      color: "sticky-note-yellow",
      rotation: "-2deg",
      skills: ["React", "JavaScript ES6+", "HTML/CSS", "Tailwind CSS"],
      icon: "💻"
    },
    {
      category: "3D & Creative",
      color: "sticky-note-blue",
      rotation: "3deg",
      skills: ["Three.js", "GSAP", "Framer Motion", "Blender"],
      icon: "🎮"
    },
    {
      category: "AI & Tools",
      color: "sticky-note-pink",
      rotation: "-1deg",
      skills: ["Python", "LangChain", "Hugging Face", "Vector DBs"],
      icon: "🤖"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, rotate: 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 hero-title">
            What I do?
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="handwritten-arrow">↗</div>
            <p className="text-lg text-gray-600 handwritten-text">
              My expertise spans across modern web technologies
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className={`sticky-note ${skillGroup.color}`}
              style={{ '--rotation': skillGroup.rotation }}
              whileHover={{ 
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{skillGroup.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 sticky-note-title">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-gray-700 font-medium body-text"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional skills showcase */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-50 rounded-full px-4 sm:px-8 py-4">
            <span className="text-gray-600 font-medium text-center sm:text-left">Also experienced with:</span>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {["LoRA", "GLSL", "Cannon.js", "Gradio", "LLaMA"].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;