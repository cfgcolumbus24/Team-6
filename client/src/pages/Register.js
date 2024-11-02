// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        fname: '',
        lname: '',
        bio: '',
        title: '',
        image: '',
        instagram: '',
        facebook: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            if (response.data.success) {
                alert("Registration successful!");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Registration error:", error);
            alert("Failed to register. Please try again.");
        }
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Register</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formFname">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formLname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBio">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control
                                type="text"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formInstagram">
                            <Form.Label>Instagram</Form.Label>
                            <Form.Control
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formFacebook">
                            <Form.Label>Facebook</Form.Label>
                            <Form.Control
                                type="text"
                                name="facebook"
                                value={formData.facebook}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3 w-100">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
