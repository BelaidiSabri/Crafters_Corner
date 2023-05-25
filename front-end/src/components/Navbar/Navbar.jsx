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
       <Link to={'/'} className="navbar-item"><li>Home</li></Link>
       <Link className="navbar-item"><li>Products</li></Link>
       <Link className="navbar-item"><li>Eco-friendly</li></Link>
      </ul>
      <div className="navbar-connect">
        <Link to={'/login'}>Connect</Link>
      </div>
    </nav>
  );
};

export default Navbar;
