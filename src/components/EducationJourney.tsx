import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

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

          {/* Professional Experience */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Experience</h3>
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">Software Development Engineer (SDE)</h4>
                    <p className="text-blue-700 font-semibold text-lg">MAQ Software</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Location</p>
                      <p className="text-gray-600">Noida Office</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 font-medium">Position</p>
                      <p className="text-gray-600">Full-time Software Development Engineer</p>
                    </div>
                  </div>
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