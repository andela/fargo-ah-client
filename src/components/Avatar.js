import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Avatar = ({ user }) => (
  <div>
    <div>
      <NavLink to="/">
        <div className="dropdown">
          <Image src={user.detail.image ? user.detail.image : user.detail.avatar} avatar />
          <span>{user.detail.username}</span>
          <div className="dropdown-content">
            <NavLink to={`/profiles/${user.detail.username}`}>View Profile </NavLink>
            <NavLink to="/dashboard">View Dashboard </NavLink>
            <NavLink to="/logout">Logout </NavLink>
          </div>
        </div>
      </NavLink>
    </div>
  </div>
);

Avatar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,

  }).isRequired,
};

export default Avatar;
