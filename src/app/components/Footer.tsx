'use client';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>🐝 Bee</h4>
          <p>Made in Berlin. Follow the bee!</p>
        </div>
        <div className="footer-section">
          <h5>Links</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Berlin Vibes</h5>
          <p>✨</p>
          <p>🎵</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Berlin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
