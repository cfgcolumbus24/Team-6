import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Header';
import Chatbot from '../Components/Chatbot';

const Directory = () => {
    const navigate = useNavigate();
    const [directoryData, setDirectoryData] = useState([]);

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
                        <tr key={user._id}>
                            <td>
                                <Link to={`/profile/${user._id}`} className="text-decoration-none">
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
            {/* Chatbot Component */}
            <Chatbot />
        </Container>
    );
};

export default Directory;
