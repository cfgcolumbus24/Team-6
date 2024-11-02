import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import { Card, Button, Row, Col } from 'react-bootstrap';

function ResourceCard({ id, title, date, author, content, imageUrl }) {
  // Shorten content and add ellipsis if it's too long
  const shortenedContent = content.length > 100 ? content.substring(0, 100) + '...' : content;

  return (
    <Card className="mb-3">
      <Row noGutters>
        <Col md={4}>
          <Card.Img src={imageUrl} style={{ height: '100%', objectFit: 'cover' }} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
            <Card.Text>{shortenedContent}</Card.Text>
            {/* Link to individual page for resource shown on card */}
            <Link to={`/resource/${id}`}>
              <Button variant="primary">View Resource</Button>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ResourceCard;
