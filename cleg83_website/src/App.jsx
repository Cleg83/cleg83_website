import { Buffer } from 'buffer';
window.Buffer = Buffer;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './pages/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



