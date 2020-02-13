/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const withChildFunction = (fn) => (Wrapped) => (
  (props) => (
    <Wrapped {...props}>
      {fn}
    </Wrapped>
  )
);

export default withChildFunction;
