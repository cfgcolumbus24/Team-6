import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Resources from './Pages/Resources';
import Resource from './Pages/Resource';
import Events from './Pages/Events';
import Event from './Pages/Event';
import Body from './Components/Body';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/resource/:id" element={<Resource />} />
        </Routes>
    </Router>
);

export default App;
