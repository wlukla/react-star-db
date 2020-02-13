import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="jumbotron text-center">
        <h2>This is secret!!!</h2>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

SecretPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default SecretPage;
