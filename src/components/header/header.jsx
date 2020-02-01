import React from 'react';

const Header = () => (
  <header className="d-flex">
    <h1>Star DB</h1>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a href="#" className="nav-link">People</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Planets</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">StarShips</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
