import React from 'react';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import PlanetView from '../planet-view';

class RandomPlanet extends React.Component {
  constructor(props) {
    super(props);

    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
      image: null,
      loading: true,
      error: false,
    };

    this.updatePlanet = this.updatePlanet.bind(this);
    this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
    this.onError = this.onError.bind(this);
  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded(planet) {
    this.setState({
      planet,
      loading: false,
      image: this.swapiService.getPlanetImage(planet.id),
    });
  }

  onError() {
    this.setState({
      error: true,
      loading: false,
    });
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const {
      planet, loading, error, image,
    } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <Loader /> : null;
    const content = hasData ? <PlanetView planet={planet} image={image} /> : null;

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
