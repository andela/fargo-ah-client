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
          <p>Author&apos;s Haven</p>
        </Link>
      </div>
      {
        (!user)
          ? <Nav text={text} class="Nav" />
          : (pathname === '/login')
            ? <AuthNav />
            : <LoggedInNav text={text} user={user} class="Nav" />
      }
    </div>
  </div>
);

export default Header;

Header.defaultProps = {
  user: null,
  pathname: '/',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.shape(),
  pathname: PropTypes.string,
};
