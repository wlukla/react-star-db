/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';


const ItemList = (props) => {
  const { data, onItemSelected, children: renderFunc } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderFunc(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });


  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

ItemList.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  onItemSelected: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};

export default ItemList;
