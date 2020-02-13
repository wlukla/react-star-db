import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components';

const StarshipsPage = ({ history }) => (
  <StarshipList
    onItemSelected={(itemId) => {
      history.push(itemId);
    }}
  />
);

StarshipsPage.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(StarshipsPage);
