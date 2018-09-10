import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';

import MenubarItem from './MenubarItem';

class Menubar extends Component {
  componentWillMount() {
    this.setState({
      activeItemIndex: 0,
      numberOfCards: 2,
    });
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  // Add event listener
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
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
      this.setState({ numberOfCards: 9 });
    }
  }

  render() {
    const { activeItemIndex, numberOfCards } = this.state;
    const { categorieslist } = this.props;
    const item = categorieslist.map(text => <MenubarItem key={text} text={text} />);
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
          rightChevron={'>'}
          leftChevron={'<'}
          outsideChevron
        >
          {item}
        </ItemsCarousel>
      </div>
    );
  }
}

Menubar.propTypes = {
  categorieslist: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Menubar;
