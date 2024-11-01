import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import { Card, Button } from 'react-bootstrap';

function EventCard({ id, title, date, description, imageUrl }) {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        {/* Link to individual page for event shown on card */}
        <Link to={`/event/${id}`}>
          <Button variant="primary">RSVP</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default EventCard;

