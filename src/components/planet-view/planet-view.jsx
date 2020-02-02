import React from 'react';
import PropTypes from 'prop-types';

const PlanetView = (props) => {
  const {
    planet: {
      name, population, rotationPeriod, diameter,
    }, image,
  } = props;

  return (
    <>
      <img
        className="planet-image"
        src={image}
        alt="planet"
      />
      <div>
        <h3>{name}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="mr-2">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="mr-2">Rotation period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="mr-2">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

PlanetView.propTypes = {
  planet: PropTypes.instanceOf(Object).isRequired,
  image: PropTypes.string.isRequired,
};

export default PlanetView;
