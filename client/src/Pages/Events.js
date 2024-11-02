import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../Components/EventCard';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    eventTitle: '',
    eventDate: '',
    eventTime: '',
    eventDescription: '',
    eventImage: '',
    eventLocation: '',
    eventOrganizer: ''
  });
  const navigate = useNavigate();

  // Check if the user is logged in
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  // Handle create event button click
  const handleCreateButtonClick = () => {
    if (isLoggedIn()) {
      setShowCreateModal(true);
    } else {
      navigate('/login');
    }
  };

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/events');
        setEvents(response.data.data);
        console.log('Fetched events:', response.data.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesTitle = event.eventTitle ? event.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    const matchesDate = dateFilter ? new Date(event.eventDate) >= new Date(dateFilter) : true;
    return matchesTitle && matchesDate;
  });

  const handleCreateEvent = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/events', newEvent);
      setEvents([...events, response.data.data]);
      setShowCreateModal(false);
      setNewEvent({ eventTitle: '', eventDate: '', eventTime: '', eventDescription: '', eventImage: '', eventLocation: '', eventOrganizer: '' });
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Button className="mb-3" onClick={handleCreateButtonClick}>Create New Event</Button>
      <Form.Group controlId="searchTitle" className="mb-4">
        <Form.Label>Search by Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter event title to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
      {filteredEvents.length > 0 ? (
        <Row>
          {filteredEvents.map((event) => (
            <Col key={event._id || event.id} md={4} className="mb-4">
              <EventCard
                id={event._id || event.id}
                title={event.eventTitle || 'Untitled Event'}
                date={event.eventDate || 'Date Unavailable'}
                description={event.eventDescription || 'No description available.'}
                imageUrl={event.eventImage || 'https://picsum.photos/300/150'}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Col>
          <p className="text-center">No results found</p>
        </Col>
      )}

      {/* Create Event Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="eventTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event title"
                value={newEvent.eventTitle}
                onChange={(e) => setNewEvent({ ...newEvent, eventTitle: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={newEvent.eventDate}
                onChange={(e) => setNewEvent({ ...newEvent, eventDate: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                value={newEvent.eventTime}
                onChange={(e) => setNewEvent({ ...newEvent, eventTime: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter event description"
                value={newEvent.eventDescription}
                onChange={(e) => setNewEvent({ ...newEvent, eventDescription: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={newEvent.eventImage}
                onChange={(e) => setNewEvent({ ...newEvent, eventImage: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event location"
                value={newEvent.eventLocation}
                onChange={(e) => setNewEvent({ ...newEvent, eventLocation: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventOrganizer">
              <Form.Label>Organizer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter event organizer"
                value={newEvent.eventOrganizer}
                onChange={(e) => setNewEvent({ ...newEvent, eventOrganizer: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleCreateEvent}>Create Event</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Events;