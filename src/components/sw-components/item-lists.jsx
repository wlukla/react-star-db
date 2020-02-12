/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list';
import withData from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllStarships,
  getAllPlanets,
} = swapiService;

const withChildFunction = (Wrapped, fn) => (
  (props) => (
    <Wrapped {...props}>
      {fn}
    </Wrapped>
  )
);

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {`${name} (${model})`}
  </span>
);

const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople,
);

const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets,
);

const StarshipList = withData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships,
);

renderName.propTypes = {
  name: PropTypes.string.isRequired,
};

renderModelAndName.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export {
  PersonList,
  PlanetList,
  StarshipList,
};
