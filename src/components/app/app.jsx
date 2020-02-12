import React from 'react';
import Header from '../header';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planet';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, StarshipPage, PlanetPage } from '../pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {};
  }

  render() {
    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />

            <RandomPlanet />

            <PeoplePage />
            <PlanetPage />
            <StarshipPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
