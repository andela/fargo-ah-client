import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
    // console.log('>>>>>>>>>detail', detail);
    // console.log('>>>>>>>>>', history.substring(10));
    profileAction(history.substring(10));
    userArticles(history.substring(10));

    if (detail && detail.detail) {
      this.updateState(detail, history);
    }
  }

  componentDidUpdate(nextProps) {
    const { profile } = this.props;
    if (profile !== nextProps.profile) {
      this.updateArticleState();
    }
  }

  updateState(detail, username) {
    console.log('>>>>>>>>', detail);
    if (detail.detail.username === username.substring(10)) {
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

  render() {
    const { detail, profile } = this.props;
    const {
      isUser, hasArticles, horizontalPlain, sizeThree, loading,
    } = this.state;
    console.log('>>>>>>.isuser', detail);
    console.log('>>>>>>.HASARTICES', hasArticles);
    console.log('>>>>>>>>>>>articlelist', this.state.hasArticles);

    return (
      <div>
        <Dimmer page active={loading}><Loader /></Dimmer>
        <div id="profile-container">
          <h2> Profile</h2>
          <hr />
          <div className="center-div">
            <Image size="medium" circular src={profile && profile.user.data && profile.user.data.user.image ? profile.user.data.user.image : 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'} />
          </div>
          <div className="profile-center">
            <h3>
              {profile.user && profile.user.data && profile.user.data.user.firstname
                ? `${profile.user.data.user.firstname} ${profile.user.data.user.firstname}`
                : profile.user && profile.user.data ? profile.user.data.user.username : null}
            </h3>
            <h4 id="user-bio">
              {profile.user && profile.user.data ? profile.user.data.user.bio : null}
            </h4>
            <div>
              <h4>Following: 45 &nbsp;&nbsp; Followers: 56</h4>
            </div>
          </div>
          <div className="center-div">
            {isUser ? <Link to="/edit-profile"><Button>Edit Profile</Button></Link> : <Link to="/hihjj"><Button>Connect</Button></Link>}
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
              <Button>share your story</Button>
            </div>
          ) : null}

          {hasArticles && profile.articles.data

            ? (

              <Card.Group id="profile-card" itemsPerRow={sizeThree}>
                {profile.articles.data.articles.map(article => ProfileCard(horizontalPlain, article))}
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
  history: PropTypes.string.isRequired,
  profileAction: PropTypes.func.isRequired,
};

export default Profile;
