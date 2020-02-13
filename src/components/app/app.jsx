import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Header from '../header';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service';
import RandomPlanet from '../random-planet';

import { SwapiServiceProvider } from '../swapi-service-context';
import {
  PeoplePage, StarshipsPage, PlanetsPage, SecretPage, LoginPage,
} from '../pages';
import { StarshipDetails } from '../sw-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      isLoggedIn: false,
    };

    this.onLogIn = this.onLogIn.bind(this);
  }

  onLogIn() {
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundary>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />

              <RandomPlanet />

              <Switch>
                <Route
                  path="/"
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact
                />
                {/* <Route path="/people" render={() => <h2>People</h2>} exact /> */}
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />;
                  }}
                />

                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage
                      isLoggedIn={isLoggedIn}
                    />
                  )}
                />
                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogIn={this.onLogIn}
                    />
                  )}
                />

                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundary>
    );
  }
}

export default App;
