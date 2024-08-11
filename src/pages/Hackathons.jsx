import { motion } from 'framer-motion';
import PropTypes from 'prop-types'; // Importa PropTypes
import { FaCalculator, FaCar, FaLeaf, FaLightbulb, FaUtensils } from 'react-icons/fa';

const ChallengeCard = ({ title, description, requirements, technologies }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-2xl font-bold mb-4 flex items-center">
      <FaLeaf className="mr-2 text-green-500" />
      {title}
    </h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <h4 className="text-xl font-semibold mb-2">Requerimientos:</h4>
    <ul className="list-disc list-inside text-gray-300 mb-4">
      {requirements.map((req, index) => (
        <li key={index} className="mb-2 flex items-start">
          <span className="mr-2 mt-1"><FaLightbulb className="text-yellow-500" /></span>
          {req}
        </li>
      ))}
    </ul>
    <h4 className="text-xl font-semibold mb-2">Tecnologías sugeridas:</h4>
    <p className="text-gray-300">{technologies}</p>
  </motion.div>
);

// Define los propTypes para ChallengeCard
ChallengeCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.string.isRequired,
};

// El resto de tu código permanece igual...


const Hackathons = () => {
  const challenge = {
    title: "Calculadora de Huella de Carbono",
    description: "Muchas personas desconocen el impacto ambiental de sus actividades diarias en términos de emisiones de carbono.",
    requirements: [
      "Desarrollar una aplicación web que permita a los usuarios calcular su huella de carbono en función de sus actividades diarias, como el transporte, la alimentación y el consumo de energía.",
      "Incluir una sección de consejos personalizados para reducir la huella de carbono."
    ],
    technologies: "JavaScript (React o Angular), Python o Node.js para backend, y APIs de datos abiertos sobre emisiones de carbono."
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <motion.section
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Reto Ambiental: Hackathon 2024
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
          Únete a nosotros para crear soluciones innovadoras que ayuden a combatir el cambio climático y promover la sostenibilidad.
        </p>
      </motion.section>

      <section className="max-w-4xl mx-auto">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 flex justify-center items-center">
            <FaCalculator className="mr-3 text-blue-500" />
            Reto Principal
          </h2>
        </motion.div>
        <ChallengeCard {...challenge} />
      </section>

      <motion.section
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6">¿Por qué participar?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <FaCar className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Reduce emisiones</h3>
            <p>Ayuda a crear conciencia sobre el impacto del transporte en nuestra huella de carbono.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <FaUtensils className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Alimentación sostenible</h3>
            <p>Promueve hábitos alimenticios que sean buenos para el planeta y para la salud.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <FaLightbulb className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Eficiencia energética</h3>
            <p>Desarrolla soluciones para optimizar el consumo de energía en hogares y empresas.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hackathons;
