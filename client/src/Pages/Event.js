import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

// Mock data (replace with real data fetching logic if needed)
const eventsData = [
  {
    id: '1',
    title: 'React Workshop',
    date: '2024-11-10',
    description: 'A comprehensive workshop on React fundamentals and best practices.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '2',
    title: 'Bootstrap Basics',
    date: '2024-11-15',
    description: 'Learn how to use Bootstrap to style your web applications quickly and effectively.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: '3',
    title: 'JavaScript Deep Dive',
    date: '2024-11-20',
    description: 'An in-depth session on advanced JavaScript concepts.',
    imageUrl: 'https://via.placeholder.com/150'
  },
];

function Event() {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === id);

  if (!event) {
    return <Container className="my-5"><h2>Event Not Found</h2></Container>;
  }

  return (
    <Container className="my-5">
      <Card>
        <Card.Img variant="top" src={event.imageUrl} />
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
          <Card.Text>{event.description}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Event;
