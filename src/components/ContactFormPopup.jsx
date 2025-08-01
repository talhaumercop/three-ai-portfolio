import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactFormPopup = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) return null;

  const isSuccess = type === 'success';
  const isError = type === 'error';

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              isSuccess ? 'bg-green-100' : isError ? 'bg-red-100' : 'bg-blue-100'
            }`}>
              {isSuccess && (
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {isError && (
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              {!isSuccess && !isError && (
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            
            {/* Title */}
            <h3 className={`text-2xl font-bold mb-4 ${
              isSuccess ? 'text-green-800' : isError ? 'text-red-800' : 'text-blue-800'
            }`}>
              {isSuccess ? 'Message Sent!' : isError ? 'Oops! Something went wrong' : 'Information'}
            </h3>
            
            {/* Message */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {message}
            </p>
            
            {/* Button */}
            <motion.button
              onClick={onClose}
              className={`px-8 py-3 rounded-lg font-medium text-white transition-all ${
                isSuccess 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
                  : isError 
                    ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSuccess ? 'Great!' : isError ? 'Try Again' : 'Got it'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactFormPopup;