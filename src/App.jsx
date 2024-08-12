import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './components/body';
import Footer from './components/footer';
import Header from './components/header';
import Hackathons from './pages/Hackathons';
import InfoCard from './pages/InfoCard';
import Retos from './pages/Retos'; // Importa la nueva página

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} /> {/* Ruta principal */}
          <Route path="/hackathons" element={<Hackathons />} /> {/* Ruta para Hackathons */}
          <Route path="/info" element={<InfoCard />} /> {/* Ruta para InfoCard */}
          <Route path="/retos" element={<Retos />} /> {/* Ruta para Retos */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
