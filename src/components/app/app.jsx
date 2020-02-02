import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.swapiService = new SwapiService();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}

export default App;
