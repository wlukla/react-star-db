import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogIn }) => {
  if (isLoggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <div className="jumbotron">
      <p>Log in to see secret!</p>
      <button
        className="btn btn-primary"
        type="button"
        onClick={onLogIn}
      >
      Log In
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogIn: PropTypes.func.isRequired,
};

export default LoginPage;
