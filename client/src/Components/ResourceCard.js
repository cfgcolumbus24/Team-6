import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import { Card, Button } from 'react-bootstrap';

function ResourceCard({ id, title, date, author, content, imageUrl }) {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>{content}</Card.Text>
        {/* Link to individual page for resource shown on card */}
        <Link to={`/resources/${id}`}>
          <Button variant="primary">View Resource</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ResourceCard;