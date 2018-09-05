import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/avatar.scss';

const Avatar = ({ user }) => (
  <div>
    <div>
      <div className="dropdown">
        <NavLink to="/" className="dropbtn"><Image src={user.user.image} avatar /></NavLink>
        <div className="dropdown-content">
          <NavLink to={`/profiles/${user.user.username}`}>View Profile </NavLink>
          <NavLink to={`/dashboard/${user.user.username}`}>View Dashboard </NavLink>
        </div>
      </div>
      <span>{user.user.username}</span>
    </div>
  </div>
);

Avatar.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default Avatar;
