import React from 'react';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundary from '../error-boundary';
import Record from '../record';
import { PersonList } from '../sw-components/item-lists';

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
      <PersonList
        onItemSelected={this.onPersonSelected}
        data={this.swapiService.getAllPeople()}
        renderItem={({ name, birthYear }) => `${name} (${birthYear})`}
      />
    );

    const personDetails = (
      <ErrorBoundary>
        <ItemDetails
          itemId={selectedPerson}
          getData={this.swapiService.getPerson}
          getImageURL={this.swapiService.getPersonImage}
        >
          <Record label="Gender" field="gender" />
          <Record label="Birth year" field="birthYear" />
          <Record label="Eye color" field="eyeColor" />
        </ItemDetails>
      </ErrorBoundary>
    );

    return (
      <Row list={itemList} details={personDetails} />
    );
  }
}

export default PeoplePage;
