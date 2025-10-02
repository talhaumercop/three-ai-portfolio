import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "💻",
      color: "from-blue-500 to-cyan-400",
      skills: ["HTML5", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "React", "Next.js"]
    },
    {
      category: "3D & Creative",
      icon: "🎮",
      color: "from-purple-500 to-indigo-500",
      skills: ["Three.js", "React Three Fiber", "GLSL", "Blender (3D modeling & optimization)"]
    },
    {
      category: "Development Tools",
      icon: "🔧",
      color: "from-amber-500 to-orange-400",
      skills: ["Git", "GitHub", "TypeScript (familiar)"]
    },
    {
      category: "Backend & Infrastructure",
      icon: "🔌",
      color: "from-emerald-500 to-green-400",
      skills: ["Backend (MongoDB, Appwrite)"]
    },
    {
      category: "Physics & Animation",
      icon: "⚡",
      color: "from-rose-500 to-pink-400",
      skills: ["Physics engines: React Three Rapier", "Cannon.js"]
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      color: "from-violet-500 to-purple-400",
      skills: [
        "Agentic AI", "CrewAI", "OpenAI SDKs", 
        "LangGraph", "LangChain & LangSmith", "MCP (Model Control Protocol)",
        "RAG",
        "Fine-tuning"
      ]
    }
  ];

  // Selected skills for the floating animation
  const floatingSkills = [
    "React", "Three.js", "JavaScript", "Python", "LangChain", "HuggingFace",
    "Generative AI", "Agentic AI", "RAG", "QLoRA", "CrewAI", "Next.js",
    "Tailwind CSS", "GLSL", "Vector Embeddings", "AI Agents", "MongoDB",
    "Git", "GitHub", "TypeScript", "React Three Fiber", "Blender"
  ];

  // Generate random positions for each skill
  // Generate random positions for each skill
  const generateRandomPositions = () => {
    return floatingSkills.map((_, index) => {
      // Create truly random positions across the entire container
      return {
        x: Math.random() * 85 + 5, // 5-90% of container width (leaving margin for skill width)
        y: Math.random() * 350 + 25, // 25-375px from top (to keep within container)
        delay: Math.random() * 3, // Random delay for animation start
        duration: 5 + Math.random() * 7, // Random duration between 5-12s
        amplitude: 10 + Math.random() * 20, // Random movement amplitude
      };
    });
  };

  const skillPositions = generateRandomPositions();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 inline-block relative">
            <span className="relative z-20">My Skills</span>
            <div 
              className="absolute bg-green-300 opacity-40 transform -skew-x-12 rounded-lg z-10"
              style={{
                top: '20%',
                bottom: '20%',
                left: '-10px',
                right: '-10px'
              }}
            ></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 font-medium">
            My expertise spans across modern web technologies and AI
          </p>
        </motion.div>

        {/* Floating Skills Animation */}
        <div className="relative h-[400px] mb-16 overflow-hidden bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-inner border border-blue-200">
          {floatingSkills.map((skill, index) => {
            const position = skillPositions[index];
            
            return (
              <motion.div
                key={index}
                className="absolute px-4 py-2 rounded-full font-medium shadow-lg backdrop-blur-sm border border-blue-200"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.9) 100%)`,
                  zIndex: Math.floor(Math.random() * 10),
                  fontSize: `${Math.max(0.8, Math.min(1.2, 0.9 + Math.random() * 0.4))}rem`,
                  left: `${position.x}%`,
                  top: position.y
                }}
                initial={{ 
                  opacity: 0,
                  rotate: Math.random() * 10 - 5,
                  scale: 0.8
                }}
                animate={{ 
                  opacity: 1,
                  y: [0, -position.amplitude, 0, position.amplitude, 0],
                  x: [0, position.amplitude/2, -position.amplitude/2, position.amplitude/2, 0],
                  rotate: [
                    Math.random() * 6 - 3,
                    Math.random() * 6 - 3,
                    Math.random() * 6 - 3
                  ],
                  scale: 1
                }}
                transition={{ 
                  duration: position.duration,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: position.delay,
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.3 }
                }}
              >
                {skill}
              </motion.div>
            );
          })}
        </div>

        {/* Skill Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 overflow-hidden relative group"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${category.color}`}></div>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center text-white text-2xl mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2 pl-4">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-gray-700 relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[0.6rem] before:w-2 before:h-2 before:bg-gradient-to-br before:rounded-full group-hover:before:scale-125 before:transition-transform"
                    style={{
                      before: {
                        backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                        '--tw-gradient-from': category.color.split(' ')[0].replace('from-', ''),
                        '--tw-gradient-to': category.color.split(' ')[1].replace('to-', '')
                      }
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;