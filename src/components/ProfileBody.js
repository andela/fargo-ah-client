import React, { Component } from 'react';

import { Image, Button } from 'semantic-ui-react';

class Profile extends Component {
  state = {
    isUser: false,
    hasArticles: false,
  }

  componentDidMount() {
    const { detail, history } = this.props;
    const { isUser, hasArticles } = this.state;
    console.log('>>>>>>>>>>history', history.substring(10));
    if (detail) this.updateState(detail, history);
  }

  updateState(detail, username) {
    if (detail.username === username.substring(10)) {
      this.setState({
        isUser: true,
      });
    }
  }

  render() {
    const { detail } = this.props;
    const { isUser, hasArticles } = this.state;
    return (
      <div id="profile-container">
        <h2> Profile</h2>
        <hr />
        <div className="center-div">
          <Image src={detail && detail.image ? detail.image : 'detailhttps://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'} />
        </div>
        <div className="profile-center">
          <h3>
          name
          </h3>
          <h4>
        user details
          </h4>
          <div>
            <h4>Following: 485 &nbsp;&nbsp; Followers: 3456</h4>
          </div>
        </div>
        <div className="center-div">
          {isUser ? <Button>Edit Profile</Button> : <Button>Connect</Button>}
        </div>
        <h2>
        Stories
        </h2>
        <hr />
        {isUser && hasArticles ? <div> vertical card</div> : (
          <div className="center-div write">
            <h3>
          This user has no articles yet
            </h3>
          </div>
        )}
        {isUser && !hasArticles ? (
          <div className="center-div write">
            <h3>
        This area is getting dusty, share a story
            </h3>
            <Button>share your story</Button>
          </div>
        ) : null}
      </div>

    );
  }
}


export default Profile;
