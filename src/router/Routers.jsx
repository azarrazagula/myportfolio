import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Languages from '../pages/Languages/Languages';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/languages" element={<Languages />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Routers;
