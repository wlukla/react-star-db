import React from 'react';
import Header from '../header';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planet';
import Row from '../row';
import {
  PersonList, StarshipList, PersonDetails, PlanetDetails, StarshipDetails, PlanetList,
} from '../sw-components';

import { SwapiServiceProvider } from '../swapi-service-context';

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

            <Row
              list={<PersonList />}
              details={<PersonDetails itemId={4} />}
            />

            <Row
              list={<PlanetList />}
              details={<PlanetDetails itemId={5} />}
            />

            <Row
              list={<StarshipList />}
              details={<StarshipDetails itemId={5} />}
            />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
