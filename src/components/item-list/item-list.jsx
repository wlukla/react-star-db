/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';
import withData from '../hoc-helpers/with-data';

const ItemList = (props) => {
  const { onItemSelected, renderItem, data } = props;

  const dataList = data.map((item) => {
    const label = renderItem(item);
    const { id } = item;
    return (
      <li
        className="list-group-item list-group-item-action"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });


  return (
    <ul className="list-group mb-5">
      {dataList}
    </ul>
  );
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
};

const { getAllPeople } = new SwapiService();


export default withData(ItemList, getAllPeople);
