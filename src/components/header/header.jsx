import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => (
  <header className="d-flex">
    <Link to="/">
      <h1>Star DB</h1>
    </Link>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav nav">
          <li className="nav-item">
            <Link to="/people" className="nav-link">People</Link>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link">Planets</Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="nav-link">StarShips</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
