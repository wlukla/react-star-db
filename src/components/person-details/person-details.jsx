import React from 'react';

const RandomPlanet = () => (
  // const { link } = this.props
  <div className="jumbotron d-flex p-4 mt-5">
    <img href="#" alt="person" />
    <div>
      <h3>Name</h3>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="mr-2">Gender</span>
          <span>male</span>
        </li>
        <li className="list-group-item">
          <span className="mr-2">Age</span>
          <span>99999</span>
        </li>
        <li className="list-group-item">
          <span className="mr-2">Eye color</span>
          <span>9999</span>
        </li>
      </ul>
    </div>
  </div>
);

export default RandomPlanet;
