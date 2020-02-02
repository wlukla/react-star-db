/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Loader from '../loader/loader';

const withData = (View, getData) => (
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: null,
      };
    }

    componentDidMount() {
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
);

export default withData;
