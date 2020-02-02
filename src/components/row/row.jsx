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
  list: PropTypes.instanceOf(Array).isRequired,
  details: PropTypes.instanceOf(Array).isRequired,
};

export default Row;
