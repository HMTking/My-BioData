import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, User, Heart, Home } from 'lucide-react';

const FamilyDetails: React.FC = () => {
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
    <section id="family" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Family Details
            </h2>
            <div className="w-20 h-1 bg-gray-700 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Father */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Father</h3>
              </div>
              <div className="space-y-2">
                <p className="text-blue-700 font-semibold">Vinodkumar Kanaiyalal</p>
                <p className="text-gray-700">Area Sales Manager</p>
                <p className="text-gray-500 text-sm">RBL Bank</p>
                <p className="text-gray-500 text-sm">Contact: 9662506758</p>
              </div>
            </motion.div>

            {/* Mother */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-rose-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Mother</h3>
              </div>
              <div className="space-y-2">
                <p className="text-rose-700 font-semibold">Geetaben Vinodkumar</p>
                <p className="text-gray-700">Housewife</p>
                <p className="text-gray-500 text-sm">Caring & dedicated to family</p>
              </div>
            </motion.div>

            {/* Sister */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Sister</h3>
              </div>
              <div className="space-y-2">
                <p className="text-purple-700 font-semibold">Janvi</p>
                <p className="text-gray-700">Age: 21 years</p>
                <p className="text-gray-500 text-sm">Graduated</p>
              </div>
            </motion.div>

            {/* Elder Uncle */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Elder Uncle</h3>
              </div>
              <div className="space-y-2">
                <p className="text-green-700 font-semibold">Madhusudanbhai Kanaiyalal</p>
                <p className="text-gray-700">Farmer | Agricultural Family</p>
                <p className="text-gray-500 text-sm">Primary Contact: 9427366983</p>
              </div>
            </motion.div>

            {/* Elder Aunt */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-rose-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Elder Aunt</h3>
              </div>
              <div className="space-y-2">
                <p className="text-rose-700 font-semibold">Sharmistaben Madhusudanbhai</p>
                <p className="text-gray-700">Housewife</p>
                <p className="text-gray-500 text-sm">Family supporter</p>
              </div>
            </motion.div>

            {/* Grandparents */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Home className="w-6 h-6 text-amber-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Grandparents</h3>
              </div>
              <div className="space-y-2">
                <p className="text-amber-700 font-semibold">Kanaiyalal Jivarajbhai</p>
                <p className="text-amber-700 font-semibold">Indiraben Kanaiyalal</p>
                <p className="text-gray-500 text-sm">Blessing & guidance</p>
              </div>
            </motion.div>
          </div>

          {/* Maternal Family */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Maternal Family</h3>
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h4 className="text-xl font-semibold text-gray-900">Maternal Uncle</h4>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-700 font-semibold">Haresh Iswarbhai Patel</p>
                  <p className="text-gray-700">Village: Amlai Kampa, Modasa</p>
                  <p className="text-gray-600 text-sm">Occupation: Raj Marble Modasa and Farmer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyDetails;