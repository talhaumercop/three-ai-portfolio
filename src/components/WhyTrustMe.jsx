import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const WhyTrustMe = () => {
  const [visibleWords, setVisibleWords] = useState(0);
  const sectionRef = useRef(null);
  
  const text = "Don't let this opportunity slip away. I bring fresh perspectives, cutting-edge skills, and unwavering dedication to every project. Your vision deserves a developer who thinks beyond the ordinary.";
  const words = text.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start the word-by-word animation
          words.forEach((_, index) => {
            setTimeout(() => {
              setVisibleWords(index + 1);
            }, index * 150); // 150ms delay between each word
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Highlighter Heading */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 inline-block relative">
            <span className="relative z-20">Why Trust Me?</span>
            <div 
              className="absolute bg-yellow-300 opacity-40 transform -skew-x-12 rounded-lg z-10"
              style={{
                top: '20%',
                bottom: '20%',
                left: '-10px',
                right: '-10px'
              }}
            ></div>
          </h2>
        </motion.div>

        {/* Animated Quote Text */}
        <div className="max-w-3xl mx-auto">
          <p className="text-xl lg:text-2xl text-gray-700 italic leading-relaxed">
            <span className="text-4xl text-gray-400 mr-2">"</span>
            {words.map((word, index) => (
              <motion.span
                key={index}
                className={`inline-block mr-2 ${index < visibleWords ? 'opacity-100' : 'opacity-0'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: index < visibleWords ? 1 : 0,
                  y: index < visibleWords ? 0 : 20
                }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                {word}
              </motion.span>
            ))}
            <span className="text-4xl text-gray-400 ml-2">"</span>
          </p>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTrustMe;