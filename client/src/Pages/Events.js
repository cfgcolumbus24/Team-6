import React, { useState } from 'react';
import EventCard from '../Components/EventCard';
import { Container, Row, Col, Form } from 'react-bootstrap';

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

function Events() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Form.Control
        type="text"
        placeholder="Search by title..."
        className="mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Row>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Col key={event.id} md={4} className="mb-4">
              <EventCard
                id={event.id}
                title={event.title}
                date={event.date}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center">No results found</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Events;

