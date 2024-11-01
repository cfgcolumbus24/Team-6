import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resources from './Pages/Resources';
import Events from './Pages/Events';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default App;
