import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventCard from '../Components/EventCard';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Header from '../Components/Header';



function Events() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');

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

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <Row>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <Col key={event._id || event.id} md={4} className="mb-4">
              <EventCard
                id={event._id || event.id}
                title={event.eventTitle || 'Untitled Event'}
                date={event.eventDate || 'Date Unavailable'}
                description={event.eventDescription || 'No description available.'}
                imageUrl={event.eventImage || 'https://via.placeholder.com/150'}
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