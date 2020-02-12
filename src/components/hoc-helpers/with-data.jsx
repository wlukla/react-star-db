/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
        loading: true,
        error: false,
      };
    }

    componentDidMount() {
      this.update();
    }

    update() {
      const { getData } = this.props;

      this.setState({
        loading: true,
        error: false,
      });
      getData()
        .then((data) => this.setState({
          data,
          loading: false,
        }))
        .catch(() => {
          this.setState({
            loading: false,
            error: true,
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Loader />;
      }

      if (error) {
        return <ErrorIndicator />;
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
