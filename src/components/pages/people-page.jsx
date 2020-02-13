import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Row from '../row';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row
      list={<PersonList onItemSelected={(itemId) => history.push(itemId)} />}
      details={<PersonDetails itemId={id} />}
    />
  );
};

PeoplePage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(PeoplePage);
