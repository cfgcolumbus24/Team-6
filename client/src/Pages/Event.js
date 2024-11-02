import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';


function Event() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/events/${id}`);
        setEvent(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching event:', error);
        setError('Event not found');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <Container className="my-5"><h2>Loading...</h2></Container>;
  }

  if (error || !event) {
    return <Container className="my-5"><h2>{error}</h2></Container>;
  }

  return (
    <Container className="my-5">
      <Card>
        <Card.Img variant="top" src={event.eventImage || 'https://via.placeholder.com/150'} style={{ maxHeight: '300px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{event.eventTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{event.eventDate}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">Organized by: {event.eventOrganizer}</Card.Subtitle>
          <Card.Text>{event.eventDescription}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Event;
