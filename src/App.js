import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Awards from './pages/Awards';
import Associates from './pages/Associates';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
// ... your other pages

function App() {
  return (
    <Router>
      <Navbar /> {/* Your navbar should always stay on top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/associates" element={<Associates />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* add others as needed */}
      </Routes>
    </Router>
  );
}

export default App;
