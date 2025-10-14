import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, Linkedin, Users } from 'lucide-react';

const Footer: React.FC = () => {

  const contacts = [
    {
      icon: Users,
      href: 'tel:+919427366983',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Phone,
      href: 'tel:+919427366983',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/datt0028?utm_source=qr&igsh=NmI4b2dxMXhiZHY1',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/datt-patel-a312a5256/',
      color: 'from-blue-600 to-blue-400'
    }
  ];

  return (
    <footer className="bg-white py-8 relative border-t border-gray-200">
      <div className="container mx-auto px-6">
        {/* Contact Icons */}
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : '_self'}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div
                className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${contact.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
