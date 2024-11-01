// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function Header() {
 return (
   <Navbar bg="light" expand="lg" sticky="top" className="py-3 shadow-sm">
     <Container className="justify-content-between">
       {/* Logo and Brand with Centered Adjustment */}
       <Navbar.Brand href="/" className="d-flex align-items-center mx-auto header-brand">
         <img
           src="/lmcc-logo.png"  // Ensure the logo path is correct for Lower Manhattan Cultural Center
           alt="Lower Manhattan Cultural Center Logo"
           width="50"
           height="50"
           className="d-inline-block align-top me-2"
         />
         <span className="fw-bold text-dark fs-3">Lower Manhattan Cultural Center</span>
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

           {/* Resources (Simple Link) */}
           <Nav.Link href="/resources" className="text-secondary mx-3 fs-5">
             Resources
           </Nav.Link>

           {/* Help */}
           <Nav.Link href="/help" className="text-secondary mx-3 fs-5">
             Help
           </Nav.Link>
         </Nav>

         {/* Authentication and Connect Buttons */}
         <Nav className="ms-auto">
           <Button variant="outline-primary" href="/login" className="mx-2 fs-5">
             Login
           </Button>
           <Button variant="primary" href="/connect" className="mx-2 fs-5">
             Connect
           </Button>
           <Button variant="success" href="/signup" className="mx-2 fs-5">
             Sign Up
           </Button>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
}

export default Header;
