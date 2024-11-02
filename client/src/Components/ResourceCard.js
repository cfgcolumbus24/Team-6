import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link
import { Card, Button, Row, Col } from 'react-bootstrap';

function ResourceCard({ id, title, date, author, imageUrl }) {
  return (
    <Card className="mb-3" style={{ maxHeight: '180px', overflow: 'hidden' }}>
      <Row noGutters>
        <Col md={3} style={{ padding: '0' }}>
          <Card.Img src={imageUrl || 'https://via.placeholder.com/150'} style={{ height: '100%', objectFit: 'cover' }} />
        </Col>
        <Col md={9} style={{ padding: '0.5rem' }}>
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title || 'Untitled'}</Card.Title>
              <Card.Subtitle className="mb-1 text-muted" style={{ fontSize: '1rem' }}>{date || 'No Date'}</Card.Subtitle>
              <Card.Subtitle className="mb-1 text-muted" style={{ fontSize: '1rem' }}>{author || 'Unknown Author'}</Card.Subtitle>
            </div>
            <Link to={`/resource/${id}`} className="mt-2">
              <Button variant="primary" size="sm">View Resource</Button>
            </Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default ResourceCard;

