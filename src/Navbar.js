import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* Your logo or brand */}
      </div>
      <div className="navbar-menu">
        <div className="navbar-item">
          <a href="/">Home</a>
        </div>
        <div className="navbar-item dropdown">
          <a href="/">Dropdown</a>
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="/shopping-list">Shopping List</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;