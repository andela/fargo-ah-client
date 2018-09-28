import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Image, Button, Card, Loader, Dimmer,
} from 'semantic-ui-react';
import { ProfileCard } from '../helpers/helper';

class Profile extends Component {
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
    profileAction(history.substring(10));
    userArticles(history.substring(10));
    if (detail && detail.detail && detail.detail.username === history.substring(10)) {
      this.setState({
        isUser: true,
      });
    }
  }

  componentDidUpdate(nextProps) {
    const { profile } = this.props;
    if (!profile.articles.message
      && nextProps.profile && nextProps.profile.articles.length !== profile.articles.length) {
      this.updateArticleState();
    }
    if (profile.articles.message) {
      this.updateLoader(false);
    }
  }

  updateState(detail, username) {
    if (detail.username === username.substring(10)) {
      this.setState({
        isUser: true,
      });
    }
  }

  updateArticleState() {
    this.setState({
      hasArticles: true,
      loading: false,
    });
  }

  updateLoader(value) {
    this.setState({
      loading: value,
    });
  }

  render() {
    const { profile } = this.props;
    const {
      isUser, hasArticles, horizontalPlain, sizeThree, loading,
    } = this.state;

    return (
      <div>
        {/* <Dimmer active={loading}><Loader>Loading...</Loader></Dimmer> */}
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
              {profile.user && profile.user.data && profile.user.data.user.firstname
                ? `${profile.user.data.user.firstname} ${profile.user.data.user.lastname}`
                : profile.user && profile.user.user ? profile.user.user.username : null}
            </h3>
            <h4 id="user-bio">
              {profile.user && profile.user.user ? profile.user.user.bio : null}
            </h4>
            <div>
              <h4>Following: 45 &nbsp;&nbsp; Followers: 56</h4>
            </div>
          </div>
          <div className="center-div">
            {isUser ? <Link to="/edit-profile"><Button>Edit Profile</Button></Link> : <Button>Connect</Button>}
          </div>
          <h2>
        Stories
          </h2>
          <hr />
          {!isUser && !hasArticles ? (
            <div className="center-div write">
              <h3>
          This user has no articles yet
              </h3>
            </div>
          ) : isUser && !hasArticles ? (
            <div className="center-div write">
              <h3>
        This area is getting dusty, share a story
              </h3>
              <Link to="/create"><Button>Share your story</Button></Link>
            </div>
          ) : null}

          {hasArticles && profile.articles.articles

            ? (

              <Card.Group id="profile-card" itemsPerRow={sizeThree}>
                {profile.articles.articles.map(article => ProfileCard(horizontalPlain, article))}
              </Card.Group>
            )
            : null}
        </div>
      </div>

    );
  }
}

Profile.propTypes = {
  state: PropTypes.shape({
    isUser: PropTypes.bool.isRequired,
    hasArticles: PropTypes.bool.isRequired,
  }).isRequired,
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
