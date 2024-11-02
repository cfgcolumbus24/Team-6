import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import custom CSS for styles

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate(); 

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/users/login', formData);
            localStorage.setItem("token", response.data.token);
            alert("Login successful!");
            navigate('/p');
        } catch (error) {
            console.error(error);
            alert("Login failed.");
        }
    };

    // Function to navigate to the Register page
    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <Container className="mt-5 gradient-bg">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center text-white">Login</h2>
                    <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-2">
                            Login
                        </Button>
                        
                        <Button variant="secondary" className="w-100" onClick={handleRegister}>
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;