/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list';
import {
  withData, withSwapiService, withChildFunction, compose,
} from '../hoc-helpers';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => (
  <span>
    {`${name} (${model})`}
  </span>
);

const mapPersonMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getAllPeople,
  }
);

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList);

const mapPlanetMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getAllPlanets,
  }
);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName),
)(ItemList);


const mapStarshipsMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getAllStarships,
  }
);

const StarshipList = compose(
  withSwapiService(mapStarshipsMethodsToProps),
  withData,
  withChildFunction(renderModelAndName),
)(ItemList);

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
