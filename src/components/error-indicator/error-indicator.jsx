import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () => (
  <div className="alert alert-warning error-indicator">
    <span className="boom">We are sorry...</span>
    <span>but, something has gone wrong</span>
  </div>
);

export default ErrorIndicator;
