// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="footer text-center py-3">
      <p>© {new Date().getFullYear()} Lower Manhattan Cultural Center. All rights reserved.</p>
      <div>
        <a href="/privacy-policy" className="footer-link mx-2">Privacy Policy</a>
        <a href="/terms-of-service" className="footer-link mx-2">Terms of Service</a>
        <a href="/contact" className="footer-link mx-2">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
