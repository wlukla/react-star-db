import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ itemId, getData, getImageURL }) => (
  <ItemDetails
    itemId={itemId}
    getData={getData}
    getImageURL={getImageURL}
  >
    <Record label="Manufacturer" field="manufacturer" />
    <Record label="Cost" field="constInCredits" />
    <Record label="Length" field="length" />
    <Record label="Cargo capacity" field="cargoCapacity" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getStarship,
    getImageURL: swapiService.getStarshipImage,
  }
);

const propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  getData: PropTypes.func.isRequired,
  getImageURL: PropTypes.func.isRequired,
};

StarshipDetails.propTypes = propTypes;

StarshipDetails.defaultProps = {
  itemId: null,
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
