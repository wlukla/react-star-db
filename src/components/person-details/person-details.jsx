import React from 'react';
import PropTypes from 'prop-types';
import SwapiSevice from '../../services/swapi-service';

import './person-details.css';
import Loader from '../loader/loader';


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

    this.setState({ person: null });

    this.swapiService
      .getPerson(personId)
      .then((person) => this.setState({ person }));
  }

  render() {
    const { person } = this.state;
    const { personId } = this.props;

    const loader = personId && !person ? <Loader /> : null;
    const message = !personId && !person
      ? <span>Select something from the list</span>
      : null;

    const content = person ? <PresonContent person={person} /> : null;
    return (
      <div className="jumbotron d-flex p-4 mt-0">
        {loader}
        {message}
        {content}
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

const PresonContent = (props) => {
  const {
    person: {
      id, name, gender, birthYear, eyeColor,
    },
  } = props;

  return (
    <>
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
    </>
  );
};

PresonContent.propTypes = {
  person: PropTypes.instanceOf(Object).isRequired,
};

export default PersonDetails;
