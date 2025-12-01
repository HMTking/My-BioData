import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Briefcase, Heart, Target, Brain, Users } from 'lucide-react';

const CharacterPersonality: React.FC = () => {
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
    <section id="character" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Character & Personality
            </h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Personal Character */}
            <motion.div variants={itemVariants}>
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-rose-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Personal Character</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <User className="w-6 h-6 text-rose-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-rose-700">Nature</h4>
                      <p className="text-gray-600">Extro-Introvert character - balanced social personality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Heart className="w-6 h-6 text-rose-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-rose-700">Core Values</h4>
                      <p className="text-gray-600">Honesty and Purity are my top characteristics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-rose-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-rose-700">Priority</h4>
                      <p className="text-gray-600">Family is my first priority - I think of family before myself</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Character */}
            <motion.div variants={itemVariants}>
              <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 shadow-md">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Professional Character</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Target className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700">Goal Clarity</h4>
                      <p className="text-gray-600">Highly clear with my goals and future vision</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Brain className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700">Work Ethics</h4>
                      <p className="text-gray-600">Disciplined, consistent, and highly focused character</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-blue-700">Approach</h4>
                      <p className="text-gray-600">Strategic thinking with dedication to excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharacterPersonality;