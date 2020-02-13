import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planet';

import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, StarshipsPage, PlanetsPage } from '../pages';
import { StarshipDetails } from '../sw-components';

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
          <Router>
            <div className="container">
              <Header />

              <RandomPlanet />

              <Route
                path="/"
                render={() => <h2>Welcome to StarDB</h2>}
                exact
              />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
