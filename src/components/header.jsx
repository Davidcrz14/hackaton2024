import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaCog, FaHome, FaUser } from 'react-icons/fa';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');

  const links = [
    { id: 'home', icon: FaHome, text: 'Inicio' },
    { id: 'about', icon: FaUser, text: 'Hackatón' },
    { id: 'settings', icon: FaCog, text: 'Más Información' }
  ];

  return (
    <header className="bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          POE
        </motion.h1>
        <nav aria-label="Navegación principal">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <motion.li key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${link.id}`}
                  className={`flex items-center transition-colors duration-300 ${
                    activeLink === link.id ? 'text-purple-400' : 'text-gray-300 hover:text-pink-400'
                  }`}
                  onClick={() => setActiveLink(link.id)}
                >
                  <link.icon className="mr-2" />
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </header>
  );
};

export default Header;

