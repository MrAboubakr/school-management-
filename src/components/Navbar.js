// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar"> 
      <ul>
        <li><Link to="/">School Management</Link></li>
        <li><DarkModeToggle /></li>
      </ul>
    </nav>
  );
};

export default Navbar;