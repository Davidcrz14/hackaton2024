import { motion } from 'framer-motion';
import { Apple, Award, BookOpen, Briefcase, Clock, Code, Recycle, Users } from 'lucide-react';
import React from 'react';

const sections = [
  {
    title: "Retos a realizar",
    content: "Este evento constará de 5 proyectos de programación, cada uno enfocado en áreas clave como el medio ambiente, la salud, la educación, el reciclaje y la alimentación.",
    icon: Code
  },
  {
    title: "Organización y Comunicación",
    content: "Para la organización y comunicación durante el hackathon, utilizaremos la plataforma Slack. Pronto se proporcionará más información a quienes deseen participar.",
    icon: Briefcase
  },
  {
    title: "Oportunidad de Participación",
    content: "Este hackathon es una excelente oportunidad para que los miembros de la comunidad mejoren sus habilidades. Dado que nuestra comunidad está en sus inicios, el reconocimiento de participación será la única forma de premiar a los participantes en esta ocasión.",
    icon: BookOpen
  },
  {
    title: "Instrucciones de Participación",
    content: "Si están interesados en unirse al hackathon, pueden dirigirse al grupo de \"Retos\" y acceder al enlace que he compartido.",
    icon: Recycle
  },
  {
    title: "Forma de Realización de los Proyectos",
    content: "1. Investigación y Planificación\n2. Diseño del Proyecto\n3. Configuración del Entorno de Desarrollo\n4. Desarrollo del Proyecto\n5. Revisión\n6. Presentación final",
    icon: Apple
  }
];

const features = [
  { icon: Users, text: "Trabajo en equipo o Solitario" },
  { icon: Clock, text: "5 Días de Pruebas" },
  { icon: Award, text: "Reconocimiento a los mejores proyectos" }
];

const Retos = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 bg-gradient-to-b from-blue-900 to-black text-gray-100">
      <motion.section
        className="text-center mb-12 mt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Retos del Hackathon
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto">
          Explora los desafíos que te esperan en este evento.
        </p>
      </motion.section>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {features.map((feature, index) => (
          <div key={index} className="flex items-center bg-gray-800 rounded-full px-4 py-2">
            <feature.icon className="w-6 h-6 mr-2 text-blue-400" />
            <span className="text-sm sm:text-base">{feature.text}</span>
          </div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  className="mr-4 text-3xl text-blue-400 bg-blue-100 rounded-full p-2"
                >
                  {React.createElement(section.icon, { size: 24 })}
                </motion.div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                {section.content}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Retos;
