/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader';

const withData = (View) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      const { getData } = this.props;
      getData()
        .then((data) => this.setState({ data }));
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Loader />;
      }

      return <View {...this.props} data={data} />;
    }
  }

  WithData.propTypes = {
    getData: PropTypes.func.isRequired,
  };

  return WithData;
};

export default withData;
