import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from '../item-details';
import Record from '../record';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getPerson, getPersonImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getPerson}
          getImageURL={getPersonImage}
        >
          <Record label="Gender" field="gender" />
          <Record label="Birth year" field="birthYear" />
          <Record label="Eye color" field="eyeColor" />
        </ItemDetails>
      )
    }
  </SwapiServiceConsumer>
);

const PlanetDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getPlanet, getPlanetImage }) => (
        <ItemDetails
          itemId={itemId}
          getData={getPlanet}
          getImageURL={getPlanetImage}
        >
          <Record label="Population" field="population" />
          <Record label="Rotation period" field="rotationPeriod" />
          <Record label="Diameter" field="diameter" />
        </ItemDetails>
      )
    }
  </SwapiServiceConsumer>

);

const StarshipDetails = ({ itemId }) => (
  <SwapiServiceConsumer>
    {
      ({ getStarship, getStarshipImage }) => (
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
      )
    }
  </SwapiServiceConsumer>
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
