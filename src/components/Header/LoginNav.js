import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';

const Header = ({ text }) => (
  <div id="site-header">
    <div className="ui secondary menu">
      <div>
        <Link to="/" className="item logo">
          <img
            alt="Authors Haven Logo"
            src="https://res.cloudinary.com/blackincode/image/upload/v1536148508/FargoIcon_msl9hl.png"
            className="logo-img"
          />
          &nbsp;&nbsp;
          <p>Author&apos;s Haven</p>
        </Link>
      </div>
        <div className="right menu">
        <div className="item">
        <Button text={text} />
        </div>
        </div>
    </div>
  </div>
);

export default Header;

Header.defaultProps = {
  user: null,
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};
