import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  // Calculate age dynamically
  const calculateAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate.split('/').reverse().join('-')); // Convert DD/MM/YYYY to YYYY-MM-DD
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge('28/04/2003');

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
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Location Details & Education */}
              <div className="space-y-8">
                {/* Location Details */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-700 flex items-center">
                    <MapPin className="mr-2 w-5 h-5" />
                    Location Details
                  </h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div>
                        <h5 className="font-semibold text-gray-900">Current Residence</h5>
                        <p className="text-gray-700 text-sm">Aswamegh Apartment, Motipura, Himmatnagar</p>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <div>
                        <h5 className="font-semibold text-gray-900">Native Village</h5>
                        <p className="text-gray-700 text-sm">Vejarap Kampa, Himmatnagar</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-700 flex items-center">
                    <GraduationCap className="mr-2 w-5 h-5" />
                    Education
                  </h4>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <h5 className="font-semibold text-gray-900">Bachelor of Technology</h5>
                      <p className="text-gray-700 text-sm">Computer Science & Engineering</p>
                      <p className="text-gray-500 text-sm">Indian Institute of Information Technology, Surat</p>
                      <p className="text-gray-500 text-sm">2022 - 2026 (Final Year)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Personal Details */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-700 flex items-center">
                  <Calendar className="mr-2 w-5 h-5" />
                  Personal Details
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <h5 className="font-semibold text-gray-900">Age</h5>
                      <p className="text-gray-700 text-sm">{age} years</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <h5 className="font-semibold text-gray-900">Date of Birth</h5>
                      <p className="text-gray-700 text-sm">28/04/2003</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <h5 className="font-semibold text-gray-900">Height</h5>
                      <p className="text-gray-700 text-sm">5'7"</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <h5 className="font-semibold text-gray-900">Weight</h5>
                      <p className="text-gray-700 text-sm">64kg</p>
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

export default About;
