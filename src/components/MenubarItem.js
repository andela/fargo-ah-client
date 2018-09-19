import React from 'react';
import PropTypes from 'prop-types';

const MenubarItem = ({ handleClick, text }) => (
  /* eslint-disable */
  <div
    onClick={() => handleClick(`/category/${text.toLowerCase()}`)}
    className="MenubarItem"
  >
    {text}
  </div>
);

MenubarItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MenubarItem;
