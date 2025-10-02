import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CertificatesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      title: "Mastering Generative AI and LLMs",
      issuer: "Udemy - Ed Donner",
      date: "2024",
      image: "/certificates/LLM.jpg",
      certificateUrl: "https://www.udemy.com/certificate/UC-e18a386d-8e87-486a-a6a6-12057d7538bb/",
      description: "8-Week hands-on AI journey with practical projects and real-world applications.",
      skills: ["Generative AI", "RAG Systems", "LangChain", "AI Agents"]
    },
    {
      title: "Three.js Advanced Development",
      issuer: "Da Pang",
      date: "2023",
      image: "/certificates/threejs.jpg",
      description: "Master 3D web development with Three.js and WebGL for interactive experiences.",
      skills: ["Three.js", "3D Animation", "WebGL", "Interactive 3D"]
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Hitesh Choudhary",
      date: "2023",
      image: "/certificates/webdevelopment.jpg",
      description: "Comprehensive modern web development from frontend to deployment.",
      skills: ["React & Node.js", "JavaScript", "API Development", "Cloud Deployment"]
    },
    {
      title: "Agentic AI",
      issuer: "Udemy - Ed Donner",
      date: "2024",
      image: "/certificates/agents.jpg",
      certificateUrl: "https://www.udemy.com/certificate/UC-ee1cdd34-6056-458d-81f4-f25717d654c7/",
      description: "4-Week hands-on Agentic-AI journey with practical projects and real-world applications.",
      skills: ["MCP", "Open-AI-SDKs", "Langgraph", "Crew AI"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % certifications.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [certifications.length]);

  const nextCert = () => {
    setCurrentIndex(prev => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setCurrentIndex(prev => prev === 0 ? certifications.length - 1 : prev - 1);
  };

  const goToCert = (index) => {
    setCurrentIndex(index);
  };

  const currentCertData = certifications[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Enhanced Progress Indicator */}
        <motion.div 
          className="absolute top-4 right-4 sm:top-8 sm:right-8 z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xs sm:text-sm font-medium mb-2 text-white/80">
            Certificate {currentIndex + 1} of {certifications.length}
          </div>
          <div className="w-24 sm:w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / certifications.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Certificate Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              {/* Header */}
              <div className="space-y-3 sm:space-y-4">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Professional Certifications
                </motion.h2>
                <motion.p 
                  className="text-lg sm:text-xl text-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Validated expertise in cutting-edge technologies
                </motion.p>
              </div>

              {/* Certificate Details */}
              <motion.div
                key={`details-${currentIndex}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    {currentCertData.title}
                  </motion.h3>
                  <motion.p 
                    className="text-base sm:text-lg text-blue-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentCertData.issuer} • {currentCertData.date}
                  </motion.p>
                </div>

                {/* Description */}
                <motion.p
                  className="text-sm sm:text-base text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {currentCertData.description}
                </motion.p>

                {/* Skills */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.6, duration: 0.6 }}
                 >
                   <h4 className="text-base sm:text-lg font-semibold mb-3 text-purple-200">
                     Key Skills
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {currentCertData.skills.map((skill, index) => (
                       <motion.span
                         key={skill}
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                         whileHover={{ scale: 1.05 }}
                         className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-xs sm:text-sm text-gray-200 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                       >
                         {skill}
                       </motion.span>
                     ))}
                   </div>
                 </motion.div>



                {/* Certificate Link */}
                 {/* {currentCertData.certificateUrl && (
                   <motion.a
                     href={currentCertData.certificateUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8, duration: 0.6 }}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     View Certificate
                     <motion.span
                       className="ml-2"
                       animate={{ x: [0, 3, 0] }}
                       transition={{ duration: 1.5, repeat: Infinity }}
                     >
                       →
                     </motion.span>
                   </motion.a>
                 )} */}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Certificate Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative group">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div 
                  className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-500"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.img
                    src={currentCertData.image}
                    alt={currentCertData.title}
                    className="w-full h-48 sm:h-64 lg:h-84 object-cover rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  />
                  <motion.div 
                    className="mt-4 sm:mt-6 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div 
                      className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span 
                        className="text-xs sm:text-sm font-medium"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Verified Certificate
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced Navigation Controls */}
        <motion.div 
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Previous Button */}
            <motion.button
              onClick={prevCert}
              className="p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 bg-white/10 hover:bg-white/20 text-white text-lg sm:text-xl"
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              ←
            </motion.button>

            {/* Enhanced Indicator Dots */}
            <div className="flex space-x-2 sm:space-x-3">
              {certifications.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToCert(index)}
                  className={`rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'w-6 sm:w-8 h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-purple-400' 
                      : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60'
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextCert}
              className="p-3 sm:p-4 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 bg-white/10 hover:bg-white/20 text-white text-lg sm:text-xl"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              →
            </motion.button>
          </div>

          {/* Enhanced Auto-transition indicator */}
          <motion.div 
            className="text-center mt-3 sm:mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.p 
              className="text-xs sm:text-sm text-white/70"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Auto-transitioning every 4 seconds
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificatesSection;