import React from 'react';
import PropTypes from 'prop-types';
import SwapiSevice from '../../services/swapi-service';

import './person-details.css';


class PersonDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: null,
    };

    this.swapiService = new SwapiSevice();
    this.updatePerson = this.updatePerson.bind(this);
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    const { personId } = this.props;
    if (personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => this.setState({ person }));
  }

  render() {
    const { person } = this.state;

    if (!person) {
      return <span>Select something from the list</span>;
    }

    const {
      id, name, gender, birthYear, eyeColor,
    } = person;

    return (
      <div className="jumbotron d-flex p-4 mt-0">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="person"
        />
        <div>
          <h3>{name}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="mr-2">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="mr-2">Birth year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="mr-2">Eye color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

PersonDetails.propTypes = {
  personId: PropTypes.number,
};

PersonDetails.defaultProps = {
  personId: null,
};

export default PersonDetails;
