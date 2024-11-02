// src/Pages/About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => (
    <Container className="about-container py-5">
        {/* Main Title */}
        <h1 className="text-center mb-5">About LMCC</h1>

        {/* Introduction Section */}
        <Row className="mb-5">
            <Col md={6}>
                <h2 className="fw-bold">Our Story</h2>
                <p>
                    Founded as Lower Manhattan Cultural Council, LMCC serves, connects, and makes space for artists and community.
                    Since 1973, LMCC has been the champion for independent artists in New York City and the cultural life force of
                    Lower Manhattan. We envision New York City as a place in which artists and community in dialogue are creating
                    a more just, equitable, and sustainable society.
                </p>
            </Col>
            <Col md={6}>
                <img 
                    src="https://via.placeholder.com/500x300" 
                    alt="LMCC" 
                    className="img-fluid rounded shadow"
                />
            </Col>
        </Row>

        {/* Mission Section */}
        <Row className="mb-5">
            <Col>
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold text-center">Our Mission</h2>
                        <p className="text-center">
                            To create a fertile and nurturing environment for artists and arts groups, enlivening public spaces
                            with free programs in the visual, performing, and new media arts, and to provide leadership in cultural
                            planning and advocacy.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Values Section */}
        <Row className="mb-5">
            <h2 className="fw-bold text-center mb-4">Our Values</h2>
            {[
                { title: "Artists as Agents of Change", text: "We believe artists are critical to a healthy society as agents of change and new ideas." },
                { title: "Equity and Inclusion", text: "We acknowledge structural inequities and are committed to centering equity, diversity, and inclusion." },
                { title: "Curiosity and Experimentation", text: "We value curiosity, learning, and understanding as essential to creative development." },
                { title: "Collaboration and Partnership", text: "We build partnerships, relationships, and share resources generously." },
                { title: "Responsiveness", text: "We adapt to meet needs and ensure resilience through listening and responsiveness." },
                { title: "Openness and Care", text: "We strive to be radically generous and accessible to all in our work." }
            ].map((value, index) => (
                <Col md={4} key={index} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body>
                            <h5 className="fw-bold">{value.title}</h5>
                            <p>{value.text}</p>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

        {/* LMCC Serves Artists and Community Sections */}
        <Row className="mb-5">
            <Col md={6}>
                <h2 className="fw-bold">LMCC Serves Artists</h2>
                <ul className="list-unstyled">
                    <li>🎨 Residencies that enable artists to experiment, develop their work, and gain professional skills</li>
                    <li>💰 Grant funding to support local projects and neighborhood initiatives</li>
                    <li>🌍 Presentation opportunities to showcase work and engage with the public</li>
                </ul>
            </Col>
            <Col md={6}>
                <h2 className="fw-bold">LMCC Serves Community</h2>
                <ul className="list-unstyled">
                    <li>🎭 Free public programs in Lower Manhattan and Governors Island that activate neighborhoods</li>
                    <li>🧩 Opportunities to connect and engage with artists</li>
                    <li>🏆 Grant funding for neighborhood arts and community-based organizations</li>
                </ul>
            </Col>
        </Row>

        {/* Community and Sustainability Sections */}
        <Row className="mb-5">
            <Col md={6}>
                <Card className="shadow-sm border-0 h-100">
                    <Card.Body>
                        <h2 className="fw-bold">Community</h2>
                        <p>
                            We value an equitable, diverse, and inclusive world. We actively counter discrimination based on
                            race, nationality, gender, and other characteristics, providing opportunities to help rebalance inequities.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="shadow-sm border-0 h-100">
                    <Card.Body>
                        <h2 className="fw-bold">Sustainability</h2>
                        <p>
                            We define sustainability as an adaptive approach that considers economic, environmental, and social
                            impacts. We believe sustainable cultural initiatives improve quality of life, catalyze social equity,
                            economic diversity, and community resilience.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Land Acknowledgement */}
        <Row className="mb-5">
            <Col>
                <Card className="shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold text-center">Land Acknowledgement</h2>
                        <p className="text-center">
                            We acknowledge that our work is on the traditional lands of the Lenape people. We respect the Lenape and other
                            Indigenous caretakers of these lands, past, present, and future.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default About;
