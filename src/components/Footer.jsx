import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#222', color: '#fff', padding: '2rem 1rem', textAlign: 'center' }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Barcelona</h3>
      <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>Culture, sea, history and unforgettable experiences</p>
      <p style={{ fontSize: '0.9rem', color: '#777' }}>
        &copy; {new Date().getFullYear()} Visit Barcelona. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
