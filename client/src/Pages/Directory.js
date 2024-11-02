import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';

const Directory = () => {
    const [directoryData, setDirectoryData] = useState([]); // Initialize state to hold directory data

    useEffect(() => {
        const fetchDirectoryData = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/directory'); // Update with your API endpoint
                setDirectoryData(response.data); // Assume the response is an array of users
            } catch (error) {
                console.error('Error fetching directory data:', error);
            }
        };
        fetchDirectoryData();
    }, []);

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4">User Directory</h2>
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
                    {directoryData.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <Link to={`/profile/${user.username}`} className="text-decoration-none">
                                    {user.name}
                                </Link>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.bio}</td>
                            <td>
                                <a href={user.socialMediaLink} target="_blank" rel="noopener noreferrer">
                                    {user.socialMediaLink}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Directory;
