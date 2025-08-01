import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import KeyboardModel from './KeyboardModel';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 pt-16 md:pt-20 lg:pt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div 
          className="text-center lg:text-left py-4 md:py-6 lg:py-0 space-y-3 md:space-y-4 lg:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 hero-title relative inline-block">
              <span className="relative z-20">Talha Umar</span>
              <div className="absolute inset-0 bg-yellow-300 opacity-40 transform -skew-x-12 rounded-lg z-10" style={{ top: '10%', bottom: '10%', left: '-5%', right: '-5%' }}></div>
            </h1>
            <p className="text-xl text-gray-600 font-medium body-text">Frontend Developer</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl lg:text-3xl font-bold gradient-text hero-title">
              I design top notch websites
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed body-text">
              Specializing in 3D Web Experiences with React, Three.js, and modern web technologies. 
              Creating interactive and immersive digital experiences from Pakistan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a 
              href="#contact"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire me
            </motion.a>
            <motion.button 
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </div>

          <div className="flex items-center space-x-6 pt-2">
            <span className="text-gray-500">Follow me:</span>
            <div className="flex space-x-4">
              <a href="https://x.com/TlahaUamr95159" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://github.com/talhaumercop" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://huggingface.co/talhafewfefefew" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.8 4.8c-.663 0-1.2.537-1.2 1.2v7.2c0 .663.537 1.2 1.2 1.2s1.2-.537 1.2-1.2V8.4c0-.663-.537-1.2-1.2-1.2zm3.6 0c-.663 0-1.2.537-1.2 1.2v7.2c0 .663.537 1.2 1.2 1.2s1.2-.537 1.2-1.2V8.4c0-.663-.537-1.2-1.2-1.2z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side - Visual elements */}
        <motion.div 
          className="relative mt-6 md:mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full h-56 md:h-72 lg:h-96 xl:h-[500px]">
            {/* 3D Keyboard Model */}
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <Suspense fallback={
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center animate-spin">
                      <span className="text-white text-2xl">⌨️</span>
                    </div>
                    <p className="text-gray-600 font-medium">Loading 3D Model...</p>
                  </div>
                </div>
              }>
                <KeyboardModel />
              </Suspense>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-sticky-yellow rounded-lg flex items-center justify-center shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-sticky-pink rounded-lg flex items-center justify-center shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-2xl">🎨</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;