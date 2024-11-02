import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Image, ListGroup, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatbot from './Chatbot';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedData, setUpdatedData] = useState({ bio: '', socialMedia: {} });
    const navigate = useNavigate();

    // Fetch the logged-in user's profile data
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await axios.get('http://localhost:5001/api/users/me', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProfileData(response.data);
                setUpdatedData({
                    bio: response.data.bio,
                    socialMedia: response.data.socialMedia
                });
            } catch (error) {
                console.error('Error fetching profile data:', error);
                navigate('/login');
            }
        };

        fetchProfileData();
    }, [navigate]);

    // Handle input change for editable fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('socialMedia.')) {
            const key = name.split('.')[1];
            setUpdatedData((prevState) => ({
                ...prevState,
                socialMedia: { ...prevState.socialMedia, [key]: value }
            }));
        } else {
            setUpdatedData({ ...updatedData, [name]: value });
        }
    };

    // Save changes to the server
    const handleSave = async () => {
        try {
            const token = localStorage.getItem("token");
            await axios.put('http://localhost:5001/api/users/me', updatedData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProfileData({ ...profileData, ...updatedData });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile data:', error);
        }
    };

    if (!profileData) {
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
                                    <Image src={profileData.image || 'https://via.placeholder.com/150'} roundedCircle width="150" height="150" />
                                    <h3 className="mt-3">{profileData.fname} {profileData.lname}</h3>
                                    {isEditing ? (
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            name="bio"
                                            value={updatedData.bio}
                                            onChange={handleChange}
                                        />
                                    ) : (
                                        <p>{profileData.bio}</p>
                                    )}
                                </Col>
                            </Row>

                            <Row className="text-center my-4">
                                <Col>
                                    <h5>Contact Info</h5>
                                    <p>{profileData.phoneNumber}</p>
                                    <p><a href={`mailto:${profileData.email}`}>{profileData.email}</a></p>
                                </Col>
                            </Row>

                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>Social Media:</strong>
                                    {isEditing ? (
                                        <div className="mt-2">
                                            <Form.Control
                                                type="text"
                                                placeholder="LinkedIn URL"
                                                name="socialMedia.linkedin"
                                                value={updatedData.socialMedia.linkedin || ''}
                                                onChange={handleChange}
                                                className="mb-2"
                                            />
                                           
                                            <Form.Control
                                                type="text"
                                                placeholder="Twitter URL"
                                                name="socialMedia.twitter"
                                                value={updatedData.socialMedia.twitter || ''}
                                                onChange={handleChange}
                                                className="mb-2"
                                            />
                                        </div>
                                    ) : (
                                        <div className="d-flex justify-content-around mt-2">
                                            <Button href={profileData.socialMedia.linkedin} variant="primary" target="_blank">LinkedIn</Button>
                                            <Button href={profileData.socialMedia.github} variant="primary" target="_blank">Facebook</Button>
                                            <Button href={profileData.socialMedia.twitter} variant="primary" target="_blank">Twitter</Button>
                                        </div>
                                    )}
                                </ListGroup.Item>
                            </ListGroup>

                            <div className="mt-3 d-flex justify-content-center">
                                {isEditing ? (
                                    <>
                                        <Button variant="success" onClick={handleSave} className="me-2">Save</Button>
                                        <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
                                    </>
                                ) : (
                                    <Button variant="primary" onClick={() => setIsEditing(true)}>Edit Profile</Button>
                                )}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <Chatbot /> */}
        </Container>
    );
};

export default Profile;
