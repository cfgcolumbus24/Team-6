import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Directory = () => {
    const navigate = useNavigate();
    const [directoryData, setDirectoryData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchBy, setSearchBy] = useState('name');

    // Check if the user is logged in
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, [navigate]);

    // Fetch users from the database
    useEffect(() => {
        const fetchDirectoryData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/users'); // Adjust the endpoint as needed
                setDirectoryData(response.data.data);
            } catch (error) {
                console.error('Error fetching directory data:', error);
            }
        };
        fetchDirectoryData();
    }, []);

    // Filter directory data based on the search term and search type
    const filteredData = directoryData.filter(user => {
        const searchValue = searchTerm.toLowerCase();
        switch (searchBy) {
            case 'name':
                return (`${user.fname} ${user.lname}`).toLowerCase().includes(searchValue);
            case 'email':
                return user.email.toLowerCase().includes(searchValue);
            case 'phone':
                return user.phoneNumber.toLowerCase().includes(searchValue);
            default:
                return false;
        }
    });

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">User Directory</h2>
            <Form className="mb-3">
                <Row>
                    <Col md={4}>
                        <Form.Control
                            type="text"
                            placeholder={`Search by ${searchBy}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Col>
                    <Col md={4}>
                        <Form.Select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                            <option value="name">Name</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Bio</th>
                        <th>Social Media</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((user) => (
                        <tr key={user._id}>
                            <td>
                                <Link to={`/users/${user._id}`} className="text-decoration-none">
                                    {user.fname} {user.lname}
                                </Link>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.bio}</td>
                            <td>
                                {user.socialMedia ? (
                                    <div>
                                        {user.socialMedia.instagram && (
                                            <a href={user.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                                        )}
                                        {user.socialMedia.facebook && (
                                            <a href={user.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                                        )}
                                    </div>
                                ) : (
                                    'N/A'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Directory;