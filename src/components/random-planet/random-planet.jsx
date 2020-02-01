import React from 'react';

class RandomPlanet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  // const { link } = this.props

  render() {
    return (
      <div className="jumbotron d-flex p-4">
        <img href="#" alt="planet" />
        <div>
          <h3>Planet name</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="mr-2">Population</span>
              <span>999999</span>
            </li>
            <li className="list-group-item">
              <span className="mr-2">Rotation period</span>
              <span>99999</span>
            </li>
            <li className="list-group-item">
              <span className="mr-2">Diameter</span>
              <span>9999</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
