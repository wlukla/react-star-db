import React from 'react';
import PropTypes from 'prop-types';
import ItemDetails from '../item-details';
import Record from '../record';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = ({ itemId, getData, getImageURL }) => (
  <ItemDetails
    itemId={itemId}
    getData={getData}
    getImageURL={getImageURL}
  >
    <Record label="Gender" field="gender" />
    <Record label="Birth year" field="birthYear" />
    <Record label="Eye color" field="eyeColor" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => (
  {
    getData: swapiService.getPerson,
    getImageURL: swapiService.getPersonImage,
  }
);

PersonDetails.defaultProps = {
  itemId: null,
};

const propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  getData: PropTypes.func.isRequired,
  getImageURL: PropTypes.func.isRequired,
};

PersonDetails.propTypes = propTypes;

export default withSwapiService(PersonDetails, mapMethodsToProps);
