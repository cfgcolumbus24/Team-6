import React from 'react';

import EventCard from './Components/EventCard'

import { Container, Row, Col } from 'react-bootstrap';

const eventsData = [
  {
    id: 1,
    title: 'React Workshop',
    date: '2024-11-10',
    description: 'A comprehensive workshop on React fundamentals and best practices.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Bootstrap Basics',
    date: '2024-11-15',
    description: 'Learn how to use Bootstrap to style your web applications quickly and effectively.',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'JavaScript Deep Dive',
    date: '2024-11-20',
    description: 'An in-depth session on advanced JavaScript concepts.',
    imageUrl: 'https://via.placeholder.com/150'
  },
];

function EventsPage() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Row>
        {eventsData.map((event) => (
          <Col key={event.id} md={4} className="mb-4">
            <EventCard
              id={event.id} 
              title={event.title} 
              date={event.date} 
              description={event.description} 
              imageUrl={event.imageUrl} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default EventsPage;
