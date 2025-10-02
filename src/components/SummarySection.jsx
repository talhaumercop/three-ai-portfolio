import React from 'react';
import { motion } from 'framer-motion';

const SummarySection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 inline-block relative">
            <span className="relative z-20">About Me</span>
            <div 
              className="absolute bg-blue-300 opacity-40 transform -skew-x-12 rounded-lg z-10"
              style={{
                top: '20%',
                bottom: '20%',
                left: '-10px',
                right: '-10px'
              }}
            ></div>
          </h2>
        </motion.div>

        <motion.div 
          className="summary-content max-w-4xl mx-auto space-y-8 bg-white p-8 sm:p-10 rounded-2xl shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-start gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl text-white flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              AI Engineer and Software Engineering student with a strong foundation in front-end development, 3D web technologies, and advanced AI/LLM integration. I build real-world applications using React, Three.js, and various JavaScript frameworks.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex items-start gap-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl text-white flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              My expertise lies in Generative AI and Agentic AI, where I've experimented with over 20 Frontier and Open-Source models, leveraging HuggingFace, LangChain, LangGraph, and Gradio. I specialize in RAG implementation, QLoRA fine-tuning, and developing autonomous multi-modal AI agents using CrewAI and advanced orchestration frameworks.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummarySection;