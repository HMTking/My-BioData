import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { PanInfo } from 'framer-motion';

// Import profile images
import profileImage1 from '/images/new image.jpg';
import profileImage4 from '/images/bio4.jpg';
import profileImage5 from '/images/bio5.jpg';

const Hero: React.FC = () => {
  // State for image swapping
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [profileImage1, profileImage4, profileImage5];

  // Effect for image swapping every 4 seconds
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Swap every 4 seconds

    return () => clearInterval(interval);
  }, [images.length, isAutoPlay]);

  // Function to handle manual dot click
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
    
    // Resume auto-play after 5 seconds of manual control
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 5000);
  };

  // Function to open image modal
  const openModal = () => {
    setIsModalOpen(true);
    setIsAutoPlay(false); // Pause auto-play when modal is open
  };

  // Function to close image modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsAutoPlay(true); // Resume auto-play when modal is closed
  };

    // Function to handle swipe gestures
  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 30; // Reduced threshold for easier swiping
    const velocity = info.velocity.x;
    
    // Check both offset and velocity for better touch responsiveness
    if (info.offset.x > threshold || velocity > 500) {
      // Swiped right - go to previous image
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAutoPlay(false);
      setTimeout(() => setIsAutoPlay(true), 5000);
    } else if (info.offset.x < -threshold || velocity < -500) {
      // Swiped left - go to next image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAutoPlay(false);
      setTimeout(() => setIsAutoPlay(true), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const codeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Mobile Layout - Image First */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8 mb-12">
          <motion.div
            variants={codeVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 p-1 shadow-2xl cursor-pointer select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              drag="x"
              dragConstraints={{ left: -20, right: 20 }}
              onDragEnd={handleDragEnd}
              dragElastic={0.2}
              dragMomentum={false}
              onTap={() => {
                // Simple tap to open modal
                openModal();
              }}
            >
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt="Datt Patel"
                className="w-full h-full rounded-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Image Dots Indicator - Mobile */}
            <div className="flex justify-center space-x-2 mt-4">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-gray-700 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight text-center lg:text-left">
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">Datt</span> Patel
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
                variants={itemVariants}
              >
                My life is guided by honesty, integrity, and a strong sense of discipline. I see challenges as 
                opportunities to learn and grow while staying humble and grounded. I truly admire the importance 
                and efforts of women in our lives and believe that true wealth lies in character and simplicity.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image (Desktop Only) */}
          <motion.div
            variants={codeVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex flex-col items-center text-center space-y-6"
          >
            <div className="relative">
              <motion.div
                className="w-96 h-96 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 p-1 shadow-2xl cursor-pointer select-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: -30, right: 30 }}
                onDragEnd={handleDragEnd}
                dragElastic={0.2}
                dragMomentum={false}
                onTap={() => {
                  // Simple tap to open modal
                  openModal();
                }}
              >
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Datt Patel"
                  className="w-full h-full rounded-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              
              {/* Image Dots Indicator - Desktop */}
              <div className="flex justify-center space-x-2 mt-6">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-gray-700 scale-110' 
                        : 'bg-gray-300 hover:bg-gray-500'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl max-h-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200 z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Full Size Image */}
            <motion.img
              src={images[currentImageIndex]}
              alt="Datt Patel - Full Size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Image Navigation Dots in Modal */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black bg-opacity-50 rounded-full px-4 py-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-white scale-110' 
                      : 'bg-gray-400 hover:bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
