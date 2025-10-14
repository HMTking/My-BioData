import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Target, Book } from 'lucide-react';

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Education Journey
            </h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Current Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-blue-700">Bachelor of Technology</h4>
                  <p className="text-gray-900">Computer Science & Engineering</p>
                  <p className="text-gray-600">Indian Institute of Information Technology, Surat</p>
                  <p className="text-gray-500">2022 - 2026 (Final Year)</p>
                  <p className="text-blue-600 font-semibold">CGPA: 8.64/10</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Future Goals */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-orange-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Future Goals (2-3 Years)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Book className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-orange-700">M.Tech from IIT</h4>
                      <p className="text-gray-700">Computer Science branch specialization</p>
                      <p className="text-gray-500">Pursuing advanced studies in premier institute</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Target className="w-5 h-5 text-orange-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-orange-700">MNC Product Company</h4>
                      <p className="text-gray-700">Software Engineer/Data Scientist role</p>
                      <p className="text-gray-500">Building impactful technology solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Excellence */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence & Recognition</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-green-600">387</div>
                  <div className="text-gray-700">GATE Computer Science Rank</div>
                  <div className="text-gray-500 text-sm">All India Rank 387</div>
                  <div className="text-gray-400 text-xs">Out of 170,000+ candidates</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600">877</div>
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