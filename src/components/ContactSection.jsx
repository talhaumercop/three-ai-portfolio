import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import ContactFormPopup from './ContactFormPopup';

const ContactSection = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState({
    isOpen: false,
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailjs.send(
      'service_c9e1cnl',
      'template_0p6qexj',
      {
        from_name: formData.name,
        to_name: 'Talha Umar',
        from_email: formData.email,
        to_email: 'yourzlove56@gmail.com',
        message: formData.message,
      },
      'qc18ktF-HDbAcROh-'
    ).then(() => {
      setIsSubmitting(false);
      setPopup({
        isOpen: true,
        type: 'success',
        message: 'Thank you for reaching out! I will get back to you as soon as possible. Looking forward to working together!'
      });
      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      setIsSubmitting(false);
      console.error(error);
      setPopup({
        isOpen: true,
        type: 'error',
        message: 'Oops! Something went wrong while sending your message. Please try again or contact me directly via email.'
      });
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "talhaumar097@gmail.com",
      href: "mailto:talhaumar097@gmail.com"
    },
    {
      icon: "📍",
      label: "Location",
      value: "Pakistan",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Me
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <p className="text-lg text-gray-600 max-w-2xl">
              Ready to bring your ideas to life? Let's create something amazing together!
            </p>
            <div className="handwritten-arrow">↗</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send me a message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="What's your name?"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="What's your email?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="What do you want to say?"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's connect!
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a stunning 3D website, an AI-powered application, or just want 
                to chat about the latest web technologies, feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {info.label}
                  </h4>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability status */}
            <motion.div 
              className="bg-green-50 border border-green-200 rounded-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-800 font-semibold">
                  Available for freelance projects
                </span>
              </div>
              <p className="text-green-700 mt-2">
                Currently accepting new projects and collaborations. 
                Let's build something extraordinary together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <ContactFormPopup 
        isOpen={popup.isOpen}
        onClose={() => setPopup({ ...popup, isOpen: false })}
        type={popup.type}
        message={popup.message}
      />
    </section>
  );
};

export default ContactSection;