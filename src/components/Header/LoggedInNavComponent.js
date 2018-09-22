import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Avatar from '../Avatar';

const LoggedInNav = ({ user, pathname, history }) => (
  <div className="right menu">
    <div className="item">
      {history.location.pathname === '/' ? (
        <Link to="/create" className="tell-story">
          <img
            alt="Pen"
            src="https://res.cloudinary.com/blackincode/image/upload/v1536149768/fountain-pen-close-up_gfzl7b.svg"
            className="pen"
          />
          <span>Tell a story</span>
        </Link>
      ) : history.location.pathname === '*' ? null : (
        ''
      )}
    </div>
    <div className="item">
      <Link to="/">
        <img
          alt="Notifications"
          src="http://res.cloudinary.com/blackincode/image/upload/v1536159370/Vector_pw6m41.png"
          className="notification"
        />
      </Link>
    </div>
    <div className="item">
      <Avatar history={history} user={user} />
    </div>
    {pathname === '/' ? (
      <div className="item">
        <Link to="/">
          <Button text="Home" />
        </Link>
      </div>
    ) : (
      ''
    )}
  </div>
);

export default LoggedInNav;

LoggedInNav.defaultProps = {
  user: {},
  pathname: null,
};

LoggedInNav.propTypes = {
  user: PropTypes.shape(),
  history: PropTypes.shape().isRequired,
  pathname: PropTypes.string,
};
