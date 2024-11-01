import React from 'react';
import { Container, Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const profileData = {
        image: 'https://via.placeholder.com/150', // Placeholder image
        bio: 'Web Developer with a passion for creating innovative solutions. Skilled in MERN stack and loves working on user-centric applications.',
        total: 123, // This could represent any total metric
        socialMedia: {
            linkedin: 'https://www.linkedin.com/in/username',
            github: 'https://github.com/username',
            twitter: 'https://twitter.com/username'
        },
        phoneNumber: '123-456-7890',
        email: 'user@example.com'
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="text-center">
                                <Col>
                                    <Image src={profileData.image} roundedCircle width="150" height="150" />
                                    <h3 className="mt-3">User Name</h3>
                                    <p>{profileData.bio}</p>
                                </Col>
                            </Row>

                            <Row className="text-center my-4">
                                <Col>
                                    <h5>Total</h5>
                                    <p>{profileData.total}</p>
                                </Col>
                            </Row>

                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>Phone:</strong> {profileData.phoneNumber}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Email:</strong> <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Social Media:</strong>
                                    <div className="d-flex justify-content-around mt-2">
                                        <Button href={profileData.socialMedia.linkedin} variant="primary" target="_blank">LinkedIn</Button>
                                        <Button href={profileData.socialMedia.github} variant="dark" target="_blank">GitHub</Button>
                                        <Button href={profileData.socialMedia.twitter} variant="info" target="_blank">Twitter</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
