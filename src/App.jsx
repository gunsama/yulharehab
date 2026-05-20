import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Home from './pages/Home';
import AboutClinic from './pages/AboutClinic';
import SpineJointClinic from './pages/SpineJointClinic';
import PainClinic from './pages/PainClinic';
import RehabIvClinic from './pages/RehabIvClinic';
import Reviews from './pages/Reviews';
import DiseaseDetail from './pages/DiseaseDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutClinic />} />
            <Route path="/spine-joint/:category" element={<SpineJointClinic />} />
            <Route path="/spine-joint/:category/:diseaseId" element={<DiseaseDetail />} />
            <Route path="/pain-clinic" element={<PainClinic />} />
            <Route path="/rehab-iv" element={<RehabIvClinic />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}

export default App;
