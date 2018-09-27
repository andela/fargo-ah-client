import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Image, Button, Card } from 'semantic-ui-react';
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

    if (detail && detail.detail) {
      this.updateState(detail, history);
    }
  }

  componentDidUpdate(prevProps) {
    const { profile } = this.props;
    if (profile !== prevProps.profile) {
      this.updateArticleState();
    }
  }

  updateState(detail, username) {
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
    console.log('>>>>>>>props', this.props)
    console.log('>>>>>>profileprops', profile);
    console.log('>>>>>>detailprops', detail);
    const {
      isUser, hasArticles, horizontalPlain, sizeThree,
    } = this.state;
    console.log('>>>>>>>>>>>articlelist', this.state.hasArticles);

    return (
      <div id="profile-container">
        <h2> Profile</h2>
        <hr />
        <div className="center-div">
          <Image src={profile && profile.user.data ? profile.user.data.user.image : 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'} />
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
          {isUser ? <Button>Edit Profile</Button> : <Button>Connect</Button>}
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
