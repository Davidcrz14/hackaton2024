import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm sm:text-base">
          &copy; 2024 <span className="font-bold text-gradient bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">DavC</span> - Sin nada que hacer
        </p>
        <p className="text-xs sm:text-sm mt-2 text-gray-400">
          Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
