import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MenubarItem = ({ text }) => (
  <Link to={`/category/${text.toLowerCase()}`}>
    <div className="MenubarItem">{text}</div>
  </Link>
);

MenubarItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default MenubarItem;
