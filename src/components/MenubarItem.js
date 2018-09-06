import React from 'react';
import PropTypes from 'prop-types';

const MenubarItem = ({ text }) => (<div className="MenubarItem">{text}</div>);

MenubarItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenubarItem;
