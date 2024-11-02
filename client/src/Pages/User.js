import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Image, ListGroup, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const User = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();
    const { userId } = useParams();

    // Fetch all users and find the specific user by userId
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await axios.get('http://localhost:5001/api/users', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const user = response.data.data.find(user => user._id === userId);
                if (user) {
                    setUserData(user);
                } else {
                    console.error('User not found');
                    navigate('/not-found'); // Redirect or show a not-found message if needed
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login');
            }
        };

        fetchUserData();
    }, [navigate, userId]);

    if (!userData) {
        return <Container className="my-5"><h2>Loading...</h2></Container>;
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Row className="text-center">
                                <Col>
                                    <Image src={userData.image || 'https://via.placeholder.com/150'} roundedCircle width="150" height="150" />
                                    <h3 className="mt-3">{userData.fname} {userData.lname}</h3>
                                    <p>{userData.bio}</p>
                                </Col>
                            </Row>

                            <Row className="text-center my-4">
                                <Col>
                                    <h5>Contact Info</h5>
                                    <p>{userData.phoneNumber}</p>
                                    <p><a href={`mailto:${userData.email}`}>{userData.email}</a></p>
                                </Col>
                            </Row>

                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>Social Media:</strong>
                                    <div className="d-flex justify-content-around mt-2">
                                        {userData.socialMedia?.instagram && <Button href={userData.socialMedia.instagram} variant="danger" target="_blank">Instagram</Button>}
                                        {userData.socialMedia?.facebook && <Button href={userData.socialMedia.facebook} variant="primary" target="_blank">Facebook</Button>}
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

export default User;

