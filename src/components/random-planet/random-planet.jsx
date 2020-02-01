import React from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

class RandomPlanet extends React.Component {
  constructor(props) {
    super(props);

    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
    };

    this.updatePlanet = this.updatePlanet.bind(this);
    this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
    this.updatePlanet();
  }

  onPlanetLoaded(planet) {
    this.setState({ planet });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  render() {
    const {
      planet: {
        id, name, population, rotationPeriod, diameter,
      },
    } = this.state;

    return (
      <div className="jumbotron d-flex p-4">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
        <div>
          <h3>{name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="mr-2">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="mr-2">Rotation period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="mr-2">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
