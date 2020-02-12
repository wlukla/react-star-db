import React from 'react';
import Row from '../row';
import { StarshipList, StarshipDetails } from '../sw-components';

class StarshipPage extends React.Component {
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
        list={<StarshipList onItemSelected={this.onItemSelected} />}
        details={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}

export default StarshipPage;
