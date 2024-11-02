import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';

function Resource() {
    const { id } = useParams();
    const [resource, setResource] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResource = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/resources/${id}`);
                setResource(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching resource:', error);
                setError('Resource not found');
                setLoading(false);
            }
        };

        fetchResource();
    }, [id]);

    if (loading) {
        return <Container className="my-5"><h2>Loading...</h2></Container>;
    }

    if (error || !resource) {
        return <Container className="my-5"><h2>{error}</h2></Container>;
    }

    return (
        <Container className="my-5">
            <Card>
                <Card.Img variant="top" src={resource.imageUrl || 'https://picsum.photos/300/150'} style={{ maxHeight: '300px', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title>{resource.resourceTitle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{resource.resourceDate}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{resource.resourceAuthor}</Card.Subtitle>
                    <Card.Text>{resource.resourceContent}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Resource;