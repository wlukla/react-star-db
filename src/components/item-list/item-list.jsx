/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: null,
    };
  }

  componentDidMount() {
    const { getData } = this.props;
    getData()
      .then((itemList) => this.setState({ itemList }));
  }

  renderItems(arr) {
    const { onItemSelected, renderItem } = this.props;

    return arr.map((item) => {
      const label = renderItem(item);
      const { id } = item;
      return (
        <li
          className="list-group-item list-group-item-action"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    const loader = !itemList ? <Loader /> : null;
    const list = itemList ? this.renderItems(itemList) : null;

    return (
      <ul className="list-group mb-5">
        {loader}
        {list}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};

export default ItemList;
