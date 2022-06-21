import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import Vendors from './components/Vendors/Vendors';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/vendors" element={<Vendors />} /> */}
        </Routes>

        {/* for styling */}
        <Vendors />
        <Products />
      </div>
    </Router>
  );
}

export default App;
