// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: 'blue', color: 'white' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Hoteles de la Ciudad de Chihuahua</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/MainPage" href="MainPage" >Inicio</Link>
              
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
