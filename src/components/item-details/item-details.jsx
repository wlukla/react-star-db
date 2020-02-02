import React from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';

import './item-details.css';
import Loader from '../loader/loader';
import ItemContent from '../item-content';

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: null,
      image: null,
    };

    this.swapiService = new SwapiService();
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    const { itemId } = this.props;
    if (itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageURL } = this.props;
    if (!itemId) {
      return;
    }

    this.setState({ item: null });

    getData(itemId)
      .then((item) => this.setState({
        item,
        image: getImageURL(itemId),
      }));
  }

  render() {
    const { item, image } = this.state;
    const { itemId, children } = this.props;

    const loader = itemId && !item ? <Loader /> : null;
    const message = !itemId && !item
      ? <span>Select something from the list</span>
      : null;

    const content = item ? (
      <ItemContent
        item={item}
        image={image}
        fields={children}
      />
    )
      : null;

    return (
      <div className="jumbotron d-flex p-4 mt-0">
        {loader}
        {message}
        {content}
      </div>
    );
  }
}

ItemDetails.propTypes = {
  itemId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  getData: PropTypes.func.isRequired,
  getImageURL: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default ItemDetails;
