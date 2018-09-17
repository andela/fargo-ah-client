import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/userActions';

class Avatar extends Component {
  logout = () => {
    const { userLogout, history } = this.props;
    if (userLogout()) {
      return history.push('/');
    }
  };

  render() {
    const { user } = this.props;
    return (
      <div>
        <div>
          <NavLink to="/">
            <div className="dropdown">
              <Image
                src={
                  user.detail.image
                    ? user.detail.image
                    : 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'
                }
                avatar
              />
              <span>{user.detail.firstname || user.detail.username}</span>
              <div className="dropdown-content">
                <NavLink to={`/profiles/${user.detail.username}`}>View Profile </NavLink>
                <NavLink to="/dashboard">View Dashboard </NavLink>
                <NavLink onClick={this.logout} to="#">
                  Logout
                </NavLink>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

Avatar.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  userLogout: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(
  null,
  { userLogout: logout },
)(Avatar);
