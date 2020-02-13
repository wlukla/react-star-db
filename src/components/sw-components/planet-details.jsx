import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ itemId, getData, getImageURL }) => (
  <ItemDetails
    itemId={itemId}
    getData={getData}
    getImageURL={getImageURL}
  >
    <Record label="Population" field="population" />
    <Record label="Rotation period" field="rotationPeriod" />
    <Record label="Diameter" field="diameter" />
  </ItemDetails>
);

const propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  getData: PropTypes.func.isRequired,
  getImageURL: PropTypes.func.isRequired,
};

const mapMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getPlanet,
    getImageURL: swapiService.getPlanetImage,
  }
);

PlanetDetails.propTypes = propTypes;

PlanetDetails.defaultProps = {
  itemId: null,
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
