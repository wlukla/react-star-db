import React from 'react';
import PropTypes from 'prop-types';

const Record = (props) => {
  const { field, label, item } = props;
  return (
    <li className="list-group-item">
      <span className="mr-2">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

Record.propTypes = {
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  item: PropTypes.instanceOf(Object),
};

Record.defaultProps = {
  item: null,
};

export default Record;
