import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaBars, FaCog, FaHome } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', icon: FaHome, text: 'Inicio', to: '/' },
    { id: 'info', icon: FaCog, text: 'Más Información', to: '/info' },
    { id: 'retos', icon: FaCog, text: 'Forma de Trabajo', to: '/retos' }
  ];

  useEffect(() => {
    const path = location.pathname;
    const active = links.find(link => link.to === path)?.id || 'home';
    setActiveLink(active);
  }, [location.pathname, links]);

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

        {/* Ícono del menú para dispositivos móviles */}
        <div className="md:hidden">
          <FaBars className="text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>

        {/* Menú principal */}
        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <motion.li
                key={link.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={link.to}
                  className={`flex items-center transition-colors duration-300 ${
                    activeLink === link.id ? 'text-purple-400' : 'text-gray-300 hover:text-pink-400'
                  }`}
                  onClick={() => setActiveLink(link.id)}
                >
                  <link.icon className="mr-2" />
                  {link.text}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menú desplegable en dispositivos móviles */}
      {isOpen && (
        <nav aria-label="Navegación móvil" className="md:hidden mt-2">
          <ul className="flex flex-col space-y-4">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className={`block py-2 px-4 text-center transition-colors duration-300 ${
                    activeLink === link.id ? 'text-purple-400' : 'text-gray-300 hover:text-pink-400'
                  }`}
                  onClick={() => {
                    setActiveLink(link.id);
                    setIsOpen(false); // Cierra el menú al hacer clic
                  }}
                >
                  <link.icon className="inline mr-2" />
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

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
