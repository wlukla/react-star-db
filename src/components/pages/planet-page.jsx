import React from 'react';
import Row from '../row';
import { PlanetList, PlanetDetails } from '../sw-components';

class PlanetsPage extends React.Component {
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
        list={<PlanetList onItemSelected={this.onItemSelected} />}
        details={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}

export default PlanetsPage;
