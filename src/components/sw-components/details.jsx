import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-service';
import Record from '../record';

const swapi = new SwapiService();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = swapi;

const PersonDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getPerson}
    getImageURL={getPersonImage}
  >
    <Record label="Gender" field="gender" />
    <Record label="Birth year" field="birthYear" />
    <Record label="Eye color" field="eyeColor" />
  </ItemDetails>
);

const PlanetDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getPlanet}
    getImageURL={getPlanetImage}
  >
    <Record label="Population" field="population" />
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="Diameter" field="diameter" />
  </ItemDetails>
);

const StarshipDetails = ({ itemId }) => (
  <ItemDetails
    itemId={itemId}
    getData={getStarship}
    getImageURL={getStarshipImage}
  >
    <Record label="Manufacturer" field="manufacturer" />
    <Record label="Cost" field="constInCredits" />
    <Record label="Length" field="length" />
    <Record label="Cargo capacity" field="cargoCapacity" />
  </ItemDetails>
);

const propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

PersonDetails.propTypes = propTypes;
PlanetDetails.propTypes = propTypes;
StarshipDetails.propTypes = propTypes;

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};
