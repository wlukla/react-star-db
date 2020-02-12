/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

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

const mapPersonMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getAllPeople,
  }
);

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps,
);

const mapPlanetMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getAllPlanets,
  }
);

const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps,
);

const mapStarshipsMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getAllStarships,
  }
);

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderModelAndName)),
  mapStarshipsMethodsToProps,
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
