import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalLayout from './components/layout/GlobalLayout';
import Home from './pages/Home';
import Mouridisme from './pages/Mouridisme';
import Thiant from './pages/Thiant';
import Evenements from './pages/Evenements';
import Actualites from './pages/Actualites';
import './index.css';
import './App.css';

function App() {
  return (
    <Router>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mouridisme" element={<Mouridisme />} />
          <Route path="/thiant" element={<Thiant />} />
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/actualites" element={<Actualites />} />
        </Routes>
      </GlobalLayout>
    </Router>
  );
}

export default App;
