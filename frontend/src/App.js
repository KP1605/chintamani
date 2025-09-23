import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Associates from './pages/Associates';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './components/Footer';
// ... your other pages

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/associates" element={<Associates />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        {/* add others as needed */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
