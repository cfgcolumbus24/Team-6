import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Resources from './Pages/Resources';
import Resource from './Pages/Resource';
import Events from './Pages/Events';
import Event from './Pages/Event';

const App = () => (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/resource/:id" element={<Resource />} />
        </Routes>
);

export default App;
