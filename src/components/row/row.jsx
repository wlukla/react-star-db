import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ list, details }) => (
  <div className="row mb2">
    <div className="col-md-6">
      {list}
    </div>
    <div className="col-md-6">
      {details}
    </div>
  </div>
);

Row.propTypes = {
  list: PropTypes.instanceOf(Object).isRequired,
  details: PropTypes.instanceOf(Object).isRequired,
};

export default Row;
