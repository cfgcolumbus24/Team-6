import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Import custom CSS for styles


const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', formData);
            alert("Registration successful!");
        } catch (error) {
            console.error(error);
            alert("Error during registration.");
        }
    };

    return (
        <Container className="mt-5 gradient-bg">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center text-white">Register</h2>
                    <Form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
                        <Form.Group controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email"
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
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
