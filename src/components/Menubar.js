import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';

import MenubarItem from './MenubarItem';


class Menubar extends Component {
  static propTypes = {
    categorieslist: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  state = {
    activeItemIndex: 0,
    numberOfCards: 2,
    caretRight: <img
      src="https://res.cloudinary.com/blackincode/image/upload/v1537262572/right-chevron_fn7ew0.png"
      alt="Right arrow"
      className="caret"
    />,
    caretLeft: <img
      src="https://res.cloudinary.com/blackincode/image/upload/v1537262572/left-chevron_mtuilw.png"
      alt="Left arrow"
      className="caret"
    />,
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  // Calculate & Update state of new dimensions
  updateDimensions() {
    if (window.innerWidth <= 388) {
      this.setState({ numberOfCards: 3 });
    } else if (window.innerWidth <= 435) {
      this.setState({ numberOfCards: 4 });
    } else if (window.innerWidth <= 778) {
      this.setState({ numberOfCards: 6 });
    } else if (window.innerWidth <= 1034) {
      this.setState({ numberOfCards: 7 });
    } else {
      this.setState({ numberOfCards: 8 });
    }
  }

  render() {
    /* eslint-disable */
    const { activeItemIndex, numberOfCards, caretLeft, caretRight } = this.state;
    const { categorieslist, getData, handleClick } = this.props;
    const item = categorieslist.map(text =>
      <MenubarItem handleClick={handleClick} key={text} text={text} />
    );
    return (
      <div className="MenubarWrapper">
        <ItemsCarousel
          className="Menubar"
          numberOfCards={numberOfCards}
          freeScrolling={false}
          slidesToScroll={numberOfCards}
          firstAndLastGutter
          gutter={0}
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition="left"
          chevronWidth={5}
          rightChevron={caretRight}
          leftChevron={caretLeft}
          outsideChevron
        >
          {item}
        </ItemsCarousel>
      </div>
    );
  }
}

export default Menubar;
