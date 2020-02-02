import React from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundary from '../error-boundary';

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPerson: 3,
    };

    this.swapiService = new SwapiService();

    this.onPersonSelected = this.onPersonSelected.bind(this);
  }

  onPersonSelected(id) {
    this.setState({ selectedPerson: id });
  }

  render() {
    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name}, ${gender}, ${birthYear}`}
      />
    );

    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={selectedPerson} />
      </ErrorBoundary>
    );

    return (
      <Row list={itemList} details={personDetails} />
    );
  }
}

export default PeoplePage;
