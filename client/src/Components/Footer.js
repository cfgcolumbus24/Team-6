// src/components/Footer.js
import React from 'react';
<<<<<<< HEAD
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start py-4 mt-auto">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5} md={12} className="mb-3">
            <h5>Lower Manhattan Cultural Center</h5>
            <p>Empowering the community through cultural engagement and diverse programming.</p>
          </Col>
          <Col lg={3} md={6} className="mb-3">
            <h5>Get Engaged</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-dark" target="_blank" rel="noopener noreferrer">
                  About Us
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@lmcc.net" className="text-dark">info@lmcc.net</a></p>
            <p>Phone: <a href="tel:+12122199401" className="text-dark">(212) 219-9401</a></p>
          </Col>
        </Row>
        <hr />
        <p className="text-muted">© {new Date().getFullYear()} Lower Manhattan Cultural Center. All rights reserved.</p>
      </Container>
=======

function Footer() {
  return (
    <footer className="footer text-center py-3">
      <p>© {new Date().getFullYear()} Lower Manhattan Cultural Center. All rights reserved.</p>
      <div>
        <a href="/privacy-policy" className="footer-link mx-2">Privacy Policy</a>
        <a href="/terms-of-service" className="footer-link mx-2">Terms of Service</a>
        <a href="/contact" className="footer-link mx-2">Contact Us</a>
      </div>
>>>>>>> 984e175 (footer)
    </footer>
  );
}

export default Footer;
