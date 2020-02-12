import React from 'react';

import Header from '../header';
// import RandomPlanet from '../random-planet';
// import PeoplePage from '../people-page';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import { PersonList, StarshipList, PersonDetails } from '../sw-components';

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
            <PersonDetails itemId={4} />
            <PersonList />

            <StarshipList />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
