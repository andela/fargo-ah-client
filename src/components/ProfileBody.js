import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Button,
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import { displayProfile, DisplayArticles } from '../helpers/helper';

export class Profile extends Component {
  state = {
    isUser: false,
    hasArticles: false,
    loading: true,
    horizontalPlain: window.screen.width < 769 ? '' : 'horizontal-plain',
    sizeThree: window.screen.width < 769 ? 1 : 3,
  }

  componentDidMount() {
    const {
      detail, history, profileAction, userArticles,
    } = this.props;
    userArticles(history.substring(10))
      .then((response) => {
        if (response) {
          this.updateLoader(false);
        }
        if (response.data.articlesCount > 0) {
          this.updateArticles(true);
        }
      });
    profileAction(history.substring(10));
    if (detail && detail.detail && detail.detail.username === history.substring(10)) {
      this.updateUser(true);
    }
  }

  updateLoader(value) {
    this.setState({
      loading: value,
    });
  }

  updateUser(value) {
    this.setState({
      isUser: value,
    });
  }

  updateArticles(value) {
    this.setState({
      hasArticles: value,
    });
  }

  render() {
    const { profile } = this.props;
    const {
      isUser, hasArticles, horizontalPlain, sizeThree, loading,
    } = this.state;

    return (
      <div>
        <Dimmer active={loading}><Loader>Loading...</Loader></Dimmer>
        <div id="profile-container">
          <h2> Profile</h2>
          <hr />
          <div className="center-div">
            <Image
              circular
              size="medium"
              src={profile && profile.user && profile.user.user && profile.user.user.image
                ? profile.user.user.image
                : 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'}
            />
          </div>
          <div className="profile-center">
            <h3>
              {displayProfile(profile)}
            </h3>
            <h4 id="user-bio">
              {profile.user && profile.user.user ? profile.user.user.bio : null}
            </h4>
            <div>
              <h4>Following: 45 &nbsp;&nbsp; Followers: 56</h4>
            </div>
          </div>
          <div className="center-div">
            {isUser ? <Button>Edit Profile</Button> : <Button>Connect</Button>}
          </div>
          <h2>
        Stories
          </h2>
          <hr />
          {DisplayArticles(isUser, hasArticles, sizeThree, profile, horizontalPlain)}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  userArticles: PropTypes.shape({
  }).isRequired,
  detail: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
  profile: PropTypes.shape({
  }).isRequired,
  history: PropTypes.string.isRequired,
  profileAction: PropTypes.func.isRequired,
};

export default Profile;
