// src/components/Body.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


function Body() {
  return (
    <div className="body-container">
      {/* Welcome Section */}
      <Container fluid className="welcome-section text-center py-5">
        <h1 className="display-4 fw-bold">Welcome to the Alumni Network</h1>
        <p className="lead">
          Join a vibrant community of alumni dedicated to making a positive impact. Stay connected, get involved, and continue your journey with us.
        </p>
        <Button href="#call-to-action" className="custom-btn mt-3 shadow">Get Involved Today</Button>
      </Container>

      {/* Alumni Impact Statistics Section */}
      <Container fluid className="impact-section text-center py-5">
        <h2 className="fw-bold">Our Alumni Impact</h2>
        <Row className="mt-4">
          {[
            { label: 'Active Alumni Members', value: '10,000+' },
            { label: 'Countries Represented', value: '50+' },
            { label: 'Events Hosted', value: '500+' },
            { label: 'Alumni Chapters', value: '30+' },
          ].map((stat, index) => (
            <Col key={index} md={3}>
              <Card className="impact-card shadow-sm border-0 rounded-4">
                <Card.Body>
                  <h3 className="fw-bold">{stat.value}</h3>
                  <p>{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container fluid className="testimonials-section text-center py-5">
        <h2 className="fw-bold">Alumni Testimonials</h2>
        <Row className="g-4 mt-4">
          {[
            { quote: "Being part of this network has helped me grow both professionally and personally.", name: "Alex Johnson, Class of 2010" },
            { quote: "The alumni events have reconnected me with friends and mentors. It's been invaluable.", name: "Taylor Smith, Class of 2015" },
            { quote: "I’ve found so much support and new opportunities within this community.", name: "Jordan Lee, Class of 2018" },
          ].map((testimonial, index) => (
            <Col key={index} md={4}>
              <Card className="testimonial-card shadow-lg border-0 rounded-4">
                <Card.Body>
                  <p className="text-muted">"{testimonial.quote}"</p>
                  <Card.Footer className="text-end text-primary fw-bold">- {testimonial.name}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Featured Alumni Section */}
      <Container fluid className="alumni-section text-center py-5">
        <h2 className="fw-bold">Meet Our Alumni</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Our alumni are leaders, innovators, and changemakers around the globe. Here are just a few of their inspiring stories.
        </p>
        <Row className="g-4 mt-4">
          {[
            { name: 'Sarah Patel', role: 'Social Impact Advocate', img: 'https://via.placeholder.com/150' },
            { name: 'James Wong', role: 'Tech Entrepreneur', img: 'https://via.placeholder.com/150' },
            { name: 'Linda Garcia', role: 'Community Organizer', img: 'https://via.placeholder.com/150' },
          ].map((alumni, index) => (
            <Col key={index} md={4}>
              <Card className="alumni-card shadow-lg border-0 rounded-4 hover-scale">
                <Card.Body>
                  <h5 className="fw-bold">{alumni.name}</h5>
                  <p>{alumni.role}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="call-to-action-section text-center py-5" id="call-to-action">
        <h2 className="fw-bold">Stay Connected</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Be part of a network that inspires and supports you. Join us for events, mentorship, and opportunities to give back.
        </p>
        <Button href="/join" className="custom-btn mt-3 shadow">Join the Alumni Network</Button>
        <Button href="/events" className="custom-btn mt-3 shadow mx-2">Explore Events</Button>
      </Container>

      {/* Newsletter Signup */}
      <Container fluid className="newsletter-section text-center py-5">
        <h2 className="fw-bold">Stay Informed</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Sign up for our newsletter to get the latest updates on alumni events, news, and opportunities.
        </p>
        <form className="newsletter-form mx-auto" style={{ maxWidth: '400px' }}>
          <input type="email" className="form-control mb-3" placeholder="Your Email" required />
          <Button type="submit" className="custom-btn shadow">Subscribe</Button>
        </form>
      </Container>
    </div>
  );
}

export default Body;
