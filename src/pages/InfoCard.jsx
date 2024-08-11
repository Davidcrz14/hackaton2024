import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaCalendarAlt, FaMap, FaNodeJs, FaPython, FaReact, FaSlack, FaUsers } from 'react-icons/fa'; // Usa FaMap como alternativa
import { SiFirebase, SiFlutter, SiMongodb, SiMysql, SiPostgresql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

// Componente para mostrar secciones de tecnología
const TechSection = ({ title, items }) => (
  <motion.div
    className="mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h3 className="text-3xl font-bold mb-6 text-blue-400">{title}</h3>
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-center bg-gray-800 rounded-lg p-4 shadow-md transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.icon}
          <span className="ml-3 text-lg">{item.name}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

TechSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};

// Componente para mostrar tarjetas de información
const InfoCard = ({ icon, title, content }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-md transition-transform transform hover:scale-105"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.05 }}
  >
    {icon}
    <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
    <p>{content}</p>
  </motion.div>
);

InfoCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// Componente principal Info que utiliza TechSection y InfoCard
const Info = () => {
  const technologies = {
    frontend: [
      { name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
      { name: "Angular", icon: <FaReact className="text-red-500 text-2xl" /> },
      { name: "Vue.js", icon: <FaReact className="text-green-500 text-2xl" /> },
      { name: "React Native", icon: <TbBrandReactNative className="text-blue-400 text-2xl" /> },
      { name: "Flutter", icon: <SiFlutter className="text-cyan-400 text-2xl" /> },
    ],
    backend: [
      { name: "Python (Django, Flask)", icon: <FaPython className="text-yellow-500 text-2xl" /> },
      { name: "Node.js (Express.js)", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    ],
    apis: [
      { name: "APIs de emisiones de carbono", icon: <FaReact className="text-green-400 text-2xl" /> },
      { name: "APIs de geolocalización", icon: <FaMap className="text-red-400 text-2xl" /> }, // Usa FaMap como alternativa
    ],
    ml: [
      { name: "Scikit-learn", icon: <FaPython className="text-orange-500 text-2xl" /> },
      { name: "TensorFlow", icon: <FaPython className="text-yellow-500 text-2xl" /> },
    ],
    database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-2xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-2xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-orange-500 text-2xl" /> },
    ],
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Información del Hackathon
        </h1>
        <p className="text-2xl sm:text-3xl text-gray-300 max-w-4xl mx-auto px-4">
          Todo lo que necesitas saber para participar en nuestro emocionante desafío de programación.
        </p>
      </motion.section>

      <div className="max-w-7xl mx-auto">
        <TechSection title="Frontend" items={technologies.frontend} />
        <TechSection title="Backend" items={technologies.backend} />
        <TechSection title="APIs" items={technologies.apis} />
        <TechSection title="Machine Learning" items={technologies.ml} />
        <TechSection title="Bases de Datos" items={technologies.database} />
      </div>

      <motion.section
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <InfoCard
          icon={<FaUsers className="text-6xl text-blue-500" />}
          title="Tamaño de los Equipos"
          content="Grupos de hasta 2 personas"
        />
        <InfoCard
          icon={<FaCalendarAlt className="text-6xl text-green-500" />}
          title="Fecha de Inicio"
          content="17 de agosto"
        />
        <InfoCard
          icon={<FaSlack className="text-6xl text-purple-500" />}
          title="Plataforma de Proyectos"
          content="Slack"
        />
      </motion.section>
    </div>
  );
};

export default Info;
