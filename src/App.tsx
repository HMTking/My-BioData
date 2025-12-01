import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FamilyDetails from './components/FamilyDetails';
import EducationJourney from './components/EducationJourney';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <FamilyDetails />
        <EducationJourney />
      </main>
      <Footer />
    </div>
  );
}

export default App;
