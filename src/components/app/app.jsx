import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: null,
    };

    this.onPersonSelected = this.onPersonSelected.bind(this);
  }

  onPersonSelected(id) {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { selectedPerson } = this.state;
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
