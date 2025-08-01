import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      position: "Frontend Developer & LLM Engineer",
      company: "Freelance",
      period: "2025 - Present",
      location: "Pakistan",
      description: "Developing interactive 3D web experiences and working on LLM engineering projects for international clients",
      achievements: [
        "Built 5+ interactive 3D websites using Three.js and React",
        "Implemented complex animations with GSAP and Framer Motion",
        "Working on LLM engineering and Python automation projects"
      ],
      color: "bg-sticky-yellow"
    },
    {
      position: "Three.js Developer",
      company: "Personal Projects",
      period: "2024 - 2025",
      location: "Pakistan",
      description: "Mastered Three.js and WebGL development while building immersive 3D web experiences",
      achievements: [
        "Learned advanced Three.js techniques and WebGL shaders",
        "Built multiple 3D interactive web applications",
        "Started exploring LLM engineering and Python development"
      ],
      color: "bg-sticky-blue"
    },
    {
      position: "Web Development Learner",
      company: "Learning Journey",
      period: "2024 - 2024",
      location: "Pakistan",
      description: "Started my web development journey with modern technologies and frameworks",
      achievements: [
        "Built solid foundation in React and modern JavaScript",
        "Learned responsive design with Tailwind CSS",
        "Mastered version control with Git and GitHub"
      ],
      color: "bg-sticky-pink"
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
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="handwritten-arrow">↙</div>
            <p className="text-lg text-gray-600 handwritten-text">
              My journey in web development and beyond
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Timeline dot */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-32 bg-gray-200 mt-4"></div>
                  )}
                </div>

                {/* Experience card */}
                <motion.div 
                  className={`flex-1 p-6 rounded-xl ${exp.color} transform rotate-1 hover:rotate-0 transition-all duration-300 shadow-lg`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="text-gray-600 font-medium">{exp.period}</p>
                      <p className="text-gray-500 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="text-gray-700 flex items-start"
                        >
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills progression */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Current Focus Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Advanced Three.js Techniques",
              "WebGL Shaders & Graphics", 
              "Python Development",
              "LLM Engineering",
              "Real-time 3D Interactions"
            ].map((focus, index) => (
              <motion.span 
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {focus}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;