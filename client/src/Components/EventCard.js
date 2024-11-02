import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function EventCard({ id, title, date, description, imageUrl }) {
  // Function to truncate the description
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Card style={{ height: '400px', display: 'flex', flexDirection: 'column' }}>
      <Card.Img
        variant="top"
        src={imageUrl || 'https://via.placeholder.com/300'}
        style={{ maxHeight: '150px', objectFit: 'cover' }}
      />
      <Card.Body style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text style={{ flex: '1' }}>{truncateDescription(description, 100)}</Card.Text>
        <div className="mt-auto">
          <Link to={`/event/${id}`}>
            <Button variant="primary">View Event</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;

