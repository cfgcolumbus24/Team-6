import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Image, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const username = 'exampleUser'; // Replace with actual username logic

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/profile/${username}`);
                setProfileData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [username]); // Fetch when the username changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching profile data: {error.message}</div>;

    return (
        <Container className="mt-5">
            <Header />
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="text-center">
                                <Col>
                                    <Image src={profileData.image || 'https://via.placeholder.com/150'} roundedCircle width="150" height="150" />
                                    <h3 className="mt-3">{profileData.fname} {profileData.lname}</h3>
                                    <p>{profileData.bio}</p>
                                </Col>
                            </Row>

                            <Row className="text-center my-4">
                                <Col>
                                    <h5>Title</h5>
                                    <p>{profileData.title}</p>
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
                                        {profileData.socialMedia && profileData.socialMedia.instagram && (
                                            <Button href={profileData.socialMedia.instagram} variant="primary" target="_blank">Instagram</Button>
                                        )}
                                        {profileData.socialMedia && profileData.socialMedia.facebook && (
                                            <Button href={profileData.socialMedia.facebook} variant="dark" target="_blank">Facebook</Button>
                                        )}
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