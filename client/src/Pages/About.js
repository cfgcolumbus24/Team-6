// src/Pages/About.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../About.css';
import Header from '../Components/Header';

const About = () => (
    <Container className="about-container py-5">
        <Header />
        {/* Main Title */}
        <h1 className="text-center mb-5">About LMCC</h1>

        {/* Introduction Section */}
        <Row className="mb-5 justify-content-center">
            <Col md={8} className="text-left">
                <h2 className="fw-bold">Our Story</h2>
                <p>
                    Founded as Lower Manhattan Cultural Council, LMCC serves, connects, and makes space for artists, alumni, and the broader community. Since 1973, LMCC has championed independent artists in New York City and empowered alumni as lifelong members of a thriving cultural network in Lower Manhattan. We envision New York City as a place where artists and alumni, in dialogue with their communities, create a more just, equitable, and sustainable society.
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
                            To create a fertile and nurturing environment for artists, alumni, and arts groups, enlivening public spaces with free programs in the visual, performing, and new media arts, and to provide leadership in cultural planning and advocacy. Through deep alumni engagement, we continue to grow a vibrant community that drives creativity, collaboration, and cultural impact.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Core Values with Alumni Engagement */}
        <Row className="mb-5 justify-content-center">
            <h2 className="fw-bold text-center mb-4">Our Core Values</h2>
            {[
                { color: "bg-primary", title: "Artistic Innovation", text: "We believe artists and alumni are vital to a healthy society, bringing fresh ideas and challenging the norm." },
                { color: "bg-success", title: "Equity and Inclusion", text: "We are committed to centering equity, diversity, and inclusion in our work, and ensuring alumni feel valued as lifelong members of our network." },
                { color: "bg-info", title: "Sustainability", text: "We approach sustainability through adaptive practices that benefit the community, the environment, and our alumni network." },
                { color: "bg-warning", title: "Global Perspective", text: "We work to bridge cultures and foster understanding across borders, encouraging alumni to connect globally and locally." },
                { color: "bg-danger", title: "Heritage and Respect", text: "We honor the history of the land and the communities we work within, fostering connections between alumni and these important roots." }
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

        {/* LMCC's Commitment to Artists, Alumni, and Community */}
        <Row className="mb-5">
            <Col md={6}>
                <Card className="text-bubble community-card shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold">LMCC Serves Artists and Alumni</h2>
                        <ul className="list-unstyled">
                            <li>🎨 Residencies that enable artists and alumni to experiment, network, and develop their work</li>
                            <li>💰 Grants supporting local arts and community projects, including those by alumni</li>
                            <li>🌍 Public presentations to showcase alumni achievements and inspire emerging artists</li>
                        </ul>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="text-bubble community-card shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold">LMCC Serves the Community</h2>
                        <ul className="list-unstyled">
                            <li>🎭 Free public programs that activate neighborhoods in Lower Manhattan, enriched by alumni involvement</li>
                            <li>🧩 Facilitating connections between audiences, artists, and alumni to strengthen cultural bonds</li>
                            <li>🏆 Grants for community-based arts organizations, with alumni as community liaisons and leaders</li>
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
                            We believe in an equitable, diverse, and inclusive world, actively working against discrimination in all forms and providing opportunities that address inequities. Alumni engagement is central to our mission, as alumni act as ambassadors, mentors, and leaders who champion our values and extend LMCC’s impact.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="text-bubble shadow-sm border-0">
                    <Card.Body>
                        <h2 className="fw-bold">Sustainability</h2>
                        <p>
                            Sustainability is an adaptive approach considering economic, environmental, and social impacts. We believe cultural initiatives, led by alumni and artists alike, can drive social equity, economic diversity, and community resilience, creating a sustainable environment for future generations.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Value of Art and Alumni Engagement */}
        <Row className="mb-5 justify-content-center">
            <Col md={10}>
                <Card className="value-of-art-card text-bubble shadow-sm border-0 p-4">
                    <Card.Body className="text-center">
                        <h2 className="fw-bold">The Value of Art and Alumni Engagement</h2>
                        <p>
                            Art holds the power to transform, inspire, and connect us all. It challenges perspectives, brings diverse communities together, and illuminates the beauty of shared human experiences. We believe that alumni engagement is equally transformative; it amplifies our impact, fosters mentorship, and builds a supportive network for artists across generations. Together, our alumni and LMCC can continue to foster understanding, empathy, and positive change within society, creating a world enriched by creativity, inclusivity, and a shared appreciation for the arts.
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default About;
