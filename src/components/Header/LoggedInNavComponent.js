import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Avatar from '../AvatarComponent';

const LoggedInNav = ({ user }) => (
  <div className="right menu">
    <div className="item">
      <Link to="/" className="tell-story">
        <img
          alt="Pen"
          src="https://res.cloudinary.com/blackincode/image/upload/v1536149768/fountain-pen-close-up_gfzl7b.svg"
          className="pen"
        />
        Tell a story
      </Link>
    </div>
    <div className="item">
      <Avatar user={user} />
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
      <Button text="Home" />
    </div>
  </div>
);

export default LoggedInNav;

LoggedInNav.defaultProps = {
  user: null,
};

LoggedInNav.propTypes = {
  user: PropTypes.shape(),
};
