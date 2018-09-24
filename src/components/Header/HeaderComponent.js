import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Nav from './NavComponent';
import LoggedInNav from './LoggedInNavComponent';
import AuthNav from './AuthNavComponent';

const Header = ({ text, user, pathname }) => (
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
          <p>Authors Haven</p>
        </Link>
      </div>
      {
        (Object.getOwnPropertyNames(user).length !== 0)
          ? <LoggedInNav text={text} user={user} class="Nav" pathname="pathname" />
          : (pathname === '/login')
            ? <AuthNav />
            : <Nav text={text} class="Nav" />
      }
    </div>
  </div>
);

export default Header;

Header.defaultProps = {
  user: {},
  pathname: '/',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.shape(),
  pathname: PropTypes.string,
};
