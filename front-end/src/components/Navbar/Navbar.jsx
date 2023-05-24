import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo/logo-main.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Products</li>
        <li className="navbar-item">Eco-friendly</li>
      </ul>
      <div className="navbar-connect">
        <Link to={'/login'}>Connect</Link>
      </div>
    </nav>
  );
};

export default Navbar;
