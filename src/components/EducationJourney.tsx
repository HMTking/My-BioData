import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationJourney: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >

          {/* Academic Excellence */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence & Recognition</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-green-600">AIR 387</div>
                  <div className="text-gray-700">GATE Computer Science Rank</div>
                  <div className="text-gray-500 text-sm">All India Rank 387</div>
                  <div className="text-gray-400 text-xs">Out of 170,000+ candidates</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">AIR 877</div>
                  <div className="text-gray-700">GATE Data Science & Artificial Intelligence Rank</div>
                  <div className="text-gray-500 text-sm">All India Rank 877</div>
                  <div className="text-gray-400 text-xs">Out of 57,000+ candidates</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationJourney;