import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Image } from 'semantic-ui-react';
import moment from 'moment';
import Button from './Button';


class CommentSegments extends Component {
  delete = () => {
    const { onClick, id } = this.props;
    return onClick(id);
  }

  render() {
    const {
      type,
      username,
      firstname,
      imageUrl,
      time,
      body,
      user,
    } = this.props;
    return (
      <Segment id="comment-segment">
        <div>
          <Image avatar src={imageUrl} />
          <span className={`${type}-avatar-name`}>{firstname}</span>
          <span className={`${type}-avatar-time`}>{moment(time).fromNow()}</span>
          {type === 'comment' && Object.getOwnPropertyNames(user).length > 0 && user.detail.username === username
            ? (
              <Button
                text="X"
                onClick={this.delete}
                floated="right"
                size="tiny"
                className="close-btn"
                compact
              />
            )
            : null
          }
        </div>
        <div className={`${type}-div-body`}>
          <p>{body}</p>
        </div>
      </Segment>
    );
  }
}

CommentSegments.propTypes = {
  type: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.shape().isRequired,
};

export default CommentSegments;
