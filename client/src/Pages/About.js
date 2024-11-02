// src/Pages/About.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../About.css';
import Header from '../Components/Header';

const About = () => (
    <Container className="about-container py-5">
        {/* Main Title */}
        <h1 className="text-center mb-5">About LMCC</h1>

        {/* Introduction Section */}
        <Row className="mb-5 justify-content-center">
            <Col md={8} className="text-left">
                <h2 className="fw-bold">Our Story</h2>
                <p>
                    Founded as Lower Manhattan Cultural Council, LMCC serves, connects, and makes space for artists and community.
                    Since 1973, LMCC has been the champion for independent artists in New York City and the cultural life force of
                    Lower Manhattan. We envision New York City as a place where artists and community in dialogue are creating
                    a more just, equitable, and sustainable society.
                </p>
                <Button href="/events" variant="primary" className="mt-3 shadow">Discover Our Events</Button>
            </Col>
        </Row>


        <Row className="mb-5 text-center justify-content-center">
            <Col md={10}>
                <Card className="mission-card text-bubble shadow-sm border-0 p-4">
                    <Card.Body>
                        <h2 className="fw-bold">Our Mission</h2>
                        <p>
                            To create a fertile and nurturing environment for artists and arts groups, enlivening public spaces with free programs
                            in the visual, performing, and new media arts, and to provide leadership in cultural planning and advocacy.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Values Section */}
        <Row className="mb-5 justify-content-center">
            <h2 className="fw-bold text-center mb-4">Our Core Values</h2>
            {[
                { color: "bg-primary", title: "Artistic Innovation", text: "We believe artists are vital to a healthy society, bringing fresh ideas and challenging the norm." },
                { color: "bg-success", title: "Equity and Inclusion", text: "We are committed to centering equity, diversity, and inclusion in our work." },
                { color: "bg-info", title: "Sustainability", text: "We approach sustainability through adaptive practices that benefit the community and the environment." },
                { color: "bg-warning", title: "Global Perspective", text: "We work to bridge cultures and foster understanding across borders." },
                { color: "bg-danger", title: "Heritage and Respect", text: "We honor the history of the land and the communities we work within." }
            ].map((value, index) => (
                <Col md={4} key={index} className="mb-4">
                    <Card className={`value-card text-bubble h-100 shadow-sm border-0 ${value.color}`}>
                        <Card.Body className="text-center text-white">
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
                <Card className="text-bubble community-card shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold">LMCC Serves Artists</h2>
                        <ul className="list-unstyled">
                            <li>🎨 Residencies that enable artists to experiment and develop their work</li>
                            <li>💰 Grants to support local arts and community projects</li>
                            <li>🌍 Public presentations to showcase artists’ work</li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="text-bubble community-card shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold">LMCC Serves Community</h2>
                        <ul className="list-unstyled">
                            <li>🎭 Free public programs that activate neighborhoods in Lower Manhattan</li>
                            <li>🧩 Connecting audiences with artists and the creative process</li>
                            <li>🏆 Grants for community-based arts organizations</li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Community and Sustainability Sections */}
        <Row className="mb-5">
            <Col md={6}>
                <Card className="text-bubble shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold">Community</h2>
                        <p>
                            We believe in an equitable, diverse, and inclusive world, actively working against discrimination in all forms
                            and providing opportunities that help address inequities in our work.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="text-bubble shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold">Sustainability</h2>
                        <p>
                            Sustainability is an adaptive approach considering economic, environmental, and social impacts.
                            We believe cultural initiatives can drive social equity, economic diversity, and community resilience.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Value of Art Message */}
        <Row className="mb-5 justify-content-center">
            <Col md={10}>
                <Card className="value-of-art-card text-bubble shadow-sm border-0 p-4">
                    <Card.Body className="text-center">
                        <h2 className="fw-bold">The Value of Art</h2>
                        <p>
                            Art holds the power to transform, inspire, and connect us all. It challenges perspectives, brings diverse
                            communities together, and illuminates the beauty of shared human experiences. As champions of artistic
                            expression, we believe in the boundless potential of art to foster understanding, empathy, and positive change
                            within society. Through supporting artists and cultural initiatives, we strive to create a world enriched by
                            creativity, inclusivity, and a shared appreciation for the arts.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default About;
