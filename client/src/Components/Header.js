// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="py-3 shadow-sm">
      <Container className="justify-content-between">
        {/* Brand Name Only, No Logo */}
        <Navbar.Brand href="/" className="header-brand">
          <span className="fw-bold text-dark fs-3">Lower Manhattan Cultural Council</span>
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Home */}
            <Nav.Link href="/" className="text-secondary mx-3 fs-5">
              Home
            </Nav.Link>

            {/* About */}
            <Nav.Link href="/about" className="text-secondary mx-3 fs-5">
              About
            </Nav.Link>

            {/* Resources */}
            <Nav.Link href="/resources" className="text-secondary mx-3 fs-5">
              Resources
            </Nav.Link>

            {/* Events */}
            <Nav.Link href="/events" className="text-secondary mx-3 fs-5">
              Events
            </Nav.Link>

            {/* Directory */}
            <Nav.Link href="/directory" className="text-secondary mx-3 fs-5">
              Directory
            </Nav.Link>

            {/* Profile */}
            <Nav.Link href="/profile" className="text-secondary mx-3 fs-5">
              Profile
            </Nav.Link>
          </Nav>

          {/* Sleek Authentication Buttons */}
          <Nav className="ms-auto">
            <Button variant="outline-dark" href="/login" className="btn-sleek mx-2 fs-6">
              Log In
            </Button>
            <Button variant="dark" href="/register" className="btn-sleek mx-2 fs-6">
              Sign Up
            </Button>
            <Button variant="success" href="/connect" className="btn-sleek mx-2 fs-6">
              Connect
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


