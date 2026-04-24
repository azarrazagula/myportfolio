import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar   from './components/Navbar/Navbar';
import Footer   from './components/Footer/Footer';
import Routers  from './router/Routers';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* sticky navbar */}
        <Navbar />

        {/* page content */}
        <main className="flex-1">
          <Routers />
        </main>

        {/* footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
