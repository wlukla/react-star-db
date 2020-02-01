/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import SwapiSevice from '../../services/swapi-service';
import Loader from '../loader/loader';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.swapiService = new SwapiSevice();
    this.state = {
      peopleList: null,
    };
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => this.setState({ peopleList }));
  }

  renderItems(arr) {
    const { onItemSelected } = this.props;
    return arr.map(({ id, name }) => (
      <li
        className="list-group-item list-group-item-action"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {name}
      </li>
    ));
  }

  render() {
    const { peopleList } = this.state;

    const loader = !peopleList ? <Loader /> : null;
    const list = peopleList ? this.renderItems(peopleList) : null;

    return (
      <ul className="list-group">
        {loader}
        {list}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};

export default ItemList;
