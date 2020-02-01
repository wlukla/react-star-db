import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // !!!
  }

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <ItemList />
        <PersonDetails />
      </div>
    );
  }
}

export default App;
