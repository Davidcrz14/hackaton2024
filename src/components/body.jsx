import { Calendar, MapPin, UserPlus } from 'lucide-react';
import { Fade, Zoom } from 'react-awesome-reveal';
import imagen from '../assets/dig.png';

const MainContent = () => {
  return (
    <main className="p-4 sm:p-6 mt-5 sm:mt-10 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Sección de bienvenida */}
      <section className="text-center mb-8 sm:mb-16">
        <Fade cascade damping={0.2}>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Tech for a Better Tomorrow
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Únete a nosotros para una emocionante jornada de innovación y creatividad.
          </p>
        </Fade>
      </section>

      {/* Sección de imágenes */}
      <section className="mb-8 sm:mb-16">
        <Fade>
          <div className="flex justify-center">
            <img
              src={imagen}
              alt="Hackatón"
              className="w-full max-w-2xl h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </Fade>
      </section>

      {/* Sección de información */}
      <section className="mb-8 sm:mb-16">
        <Fade>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gradient bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Información del Evento
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Zoom cascade damping={0.1}>
              {[
                { icon: Calendar, text: 'Fecha', detail: '17 de Agosto de 2024' },
                { icon: MapPin, text: 'Ubicación', detail: 'Vía Remota, Plataforma Slack' },
                { icon: UserPlus, text: 'Forma de Inscripción', detail: 'Inscríbete con tu Equipo de hasta 2 Usuarios' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-between h-full">
                  <div>
                    <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      {item.text}
                    </h3>
                  </div>
                  <p className="text-gray-300">{item.detail}</p>
                </div>
              ))}
            </Zoom>
          </div>
        </Fade>
      </section>

      {/* Sección de llamada a la acción */}
      <section className="text-center">
        <Fade>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gradient bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
            ¡No te lo pierdas!
          </h2>
          <a
            href="https://forms.gle/WR714wRzQLQWvx36A"
            className="bg-blue-950 text-white text-lg sm:text-xl font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg hover:bg-pink-950 hover:shadow-2xl transition duration-300 inline-block"
          >
            Inscríbete Ahora
          </a>
        </Fade>
      </section>
    </main>
  );
};

export default MainContent;
