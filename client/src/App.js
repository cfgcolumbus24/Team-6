import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Resources from './Pages/Resources';
import Resource from './Pages/Resource';
import Events from './Pages/Events';
import Event from './Pages/Event';
import Homepage from './Pages/Homepage';
import Directory from './Pages/Directory';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/resource/:id" element={<Resource />} />
            <Route path="/directory" element={<Directory />} />
        </Routes>
    </Router>
);

export default App;
