// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Resources from './Pages/Resources';
import Resource from './Pages/Resource';
import Events from './Pages/Events';
import Event from './Pages/Event';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Directory from './Pages/Directory';
import Profile from './Pages/Profile';
import User from './Pages/User';

const App = () => (
  <>
    <Header />
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/resource/:id" element={<Resource />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/directory" element={<Directory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/users/:userId" element={<User />} />
        </Routes>
    </Router>
    <Footer />
    </>
);

export default App;

