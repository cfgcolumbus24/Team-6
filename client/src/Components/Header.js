// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function Header() {
 return (
   <Navbar bg="light" expand="lg" sticky="top" className="py-3 shadow-sm">
     <Container>
       {/* LMCC Brand on the Left */}
       <Navbar.Brand href="/" className="fw-bold text-primary">
         LMCC
       </Navbar.Brand>

       {/* Toggle for Mobile View */}
       <Navbar.Toggle aria-controls="navbar-nav" />

       {/* Navbar Links */}
       <Navbar.Collapse id="navbar-nav" className="justify-content-end">
         <Nav className="ms-auto">
           {/* Home */}
           <Nav.Link href="/" className="text-dark mx-3 fs-5">
             Home
           </Nav.Link>

           {/* About */}
           <Nav.Link href="/about" className="text-dark mx-3 fs-5">
             About
           </Nav.Link>

           {/* Resources */}
           <Nav.Link href="/resources" className="text-dark mx-3 fs-5">
             Resources
           </Nav.Link>

           <Nav.Link href="/directory" className="text-dark mx-3 fs-5">
             Directory
           </Nav.Link>

           {/* Events */}
           <Nav.Link href="/events" className="text-dark mx-3 fs-5">
             Events
           </Nav.Link>

            {/* Events */}
            <Nav.Link href="/directory" className="text-dark mx-3 fs-5">
             Directory
           </Nav.Link>

           {/* Profile */}
           <Nav.Link href="/profile" className="text-dark mx-3 fs-5">
             Profile
           </Nav.Link>
         </Nav>

         {/* Authentication Buttons */}
         <Nav className="ms-auto">
           <Button variant="outline-primary" href="/login" className="mx-2 fs-5">
             Login
           </Button>
           <Button variant="primary" href="/register" className="mx-2 fs-5">
             Sign Up
           </Button>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
}

export default Header;



