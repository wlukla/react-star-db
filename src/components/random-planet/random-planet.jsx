import React from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';

class RandomPlanet extends React.Component {
  constructor(props) {
    super(props);

    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
      loading: true,
      error: false,
    };

    this.updatePlanet = this.updatePlanet.bind(this);
    this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
    this.onError = this.onError.bind(this);
    this.updatePlanet();
  }

  onPlanetLoaded(planet) {
    this.setState({ planet, loading: false });
  }

  onError() {
    this.setState({
      error: true,
      loading: false,
    });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="jumbotron d-flex p-4">
        {errorMessage}
        {loader}
        {content}
      </div>
    );
  }
}

export default RandomPlanet;

const PlanetView = ({ planet }) => {
  const {
    id, name, population, rotationPeriod, diameter,
  } = planet;

  return (
    <>
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
    </>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.instanceOf(Object).isRequired,
};
