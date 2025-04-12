import React from 'react';

const Footer = () => (
  <footer className="custom-footer text-center text-muted py-4 mt-auto">
    <div className="container">
            <small>&copy; {new Date().getFullYear()} Visualizing Country Information</small>
        </div>
        <div className="container">
            <small>All Rights Received</small>
    </div>
  </footer>
);

export default Footer;
