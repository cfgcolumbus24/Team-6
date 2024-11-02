import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Directory from './Pages/Directory';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/directory" element={<Directory />} />
        </Routes>
);

export default App;
