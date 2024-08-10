import './App.css';
import MainContent from './components/body';
import Footer from './components/footer';
import Header from './components/header';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent /> {/*uwu */}
      <Footer />
    </div>
  );
};

export default App;
