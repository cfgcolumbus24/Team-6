import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Directory = () => {
    // const [directoryData, setDirectoryData] = useState([]);

    // useEffect(() => {
    //     const fetchDirectoryData = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5000/api/directory');
    //             setDirectoryData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching directory data:', error);
    //         }
    //     };
    //     fetchDirectoryData();
    // }, []);

    // Dummy data
    const directoryData = [
        {
            id: 1,
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            phone: '(555) 123-4567',
            bio: 'Software Engineer with a passion for open source.',
            socialMediaLink: 'https://twitter.com/alicejohnson',
        },
        {
            id: 2,
            name: 'Bob Smith',
            email: 'bob.smith@example.com',
            phone: '(555) 234-5678',
            bio: 'Graphic Designer and photographer.',
            socialMediaLink: 'https://instagram.com/bobsmith',
        },
        {
            id: 3,
            name: 'Charlie Brown',
            email: 'charlie.brown@example.com',
            phone: '(555) 345-6789',
            bio: 'Data Scientist focused on AI and machine learning.',
            socialMediaLink: 'https://linkedin.com/in/charliebrown',
        },
        {
            id: 4,
            name: 'Diana Prince',
            email: 'diana.prince@example.com',
            phone: '(555) 456-7890',
            bio: 'Project Manager with 10 years of experience.',
            socialMediaLink: 'https://github.com/dianaprincess',
        },
    ];


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
                                {/* <Link to={`/profile/${user.id}`} className="text-decoration-none">
                                    {user.name}
                                </Link> */}
                                <Link to={`/profile`} className="text-decoration-none">
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
