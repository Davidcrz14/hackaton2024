import { Calendar, MapPin, UserPlus } from 'lucide-react';
import { Fade, Zoom } from 'react-awesome-reveal';
import imagen from '../assets/dig.png';

const MainContent = () => {
  return (
    <main className="p-4 sm:p-6 mt-5 sm:mt-10 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Sección de bienvenida */}
      <section className="text-center mb-8 sm:mb-16">
        <Fade cascade damping={0.2}>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Tech for a Better Tomorrow
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
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
              className="w-full max-w-3xl h-auto rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </Fade>
      </section>

      {/* Sección de información */}
      <section className="mb-8 sm:mb-16">
        <Fade>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center text-gradient bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Información del Evento
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Zoom cascade damping={0.1}>
              {[
                { icon: Calendar, text: 'Fecha', detail: '17 de Agosto de 2024' },
                { icon: MapPin, text: 'Ubicación', detail: 'Vía Remota, Plataforma Slack' },
                { icon: UserPlus, text: 'Forma de Inscripción', detail: 'Inscríbete con tu Equipo de hasta 2 Usuarios' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col justify-between h-full">
                  <div className="mb-4">
                    <item.icon className="w-12 h-12 text-blue-400" />
                    <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-2 text-gradient bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
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
      <section className="text-center mb-8 sm:mb-16">
        <Fade>
          <div className="mx-auto w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl">
            <div className="bg-[#333] flex items-center p-[5px] text-white relative">
              <div className="flex absolute left-3">
                <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
                <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
                <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
              </div>
              <div className="flex-1 text-center text-white">Registro</div>
            </div>
            <div className="p-2.5 text-[#0f0]">
              <div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtcoEZco0Jvigs9qnIFttLdPHoea5FnO5g9cKHp5VRvtbvEw/viewform"><span className="mr-2">¡CLICK PARA REGISTRARTE!</span></a>
                <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">.</span>
                <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">.</span>
                <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">.</span>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    </main>
  );
};

export default MainContent;
