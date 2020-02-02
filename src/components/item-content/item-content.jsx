import React from 'react';
import PropTypes from 'prop-types';

const ItemContent = (props) => {
  const {
    item: {
      name,
    }, image, fields, item,
  } = props;

  return (
    <>
      <img
        className="person-image"
        src={image}
        alt="person"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(fields, (child) => (
              React.cloneElement(child, { item })
            ))
          }
        </ul>
      </div>
    </>
  );
};

ItemContent.propTypes = {
  item: PropTypes.instanceOf(Object).isRequired,
  image: PropTypes.string.isRequired,
  fields: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ItemContent;
