import React from 'react';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null,
    };

    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(selectedItem) {
    this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        list={<PersonList onItemSelected={this.onItemSelected} />}
        details={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}

export default PeoplePage;
