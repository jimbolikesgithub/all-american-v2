import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Vendors from './components/Vendors (Vendors)/Vendors';
import Products from './pages/Products';
import Contact from './pages/Contact'
import WrongPage from './pages/WrongPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* path if URL is wrong */}
          <Route path="*" element={<WrongPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
