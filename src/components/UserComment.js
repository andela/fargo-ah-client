import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Segment,
  Message,
} from 'semantic-ui-react';
import CommentForm from './forms/CommentForms';
import CommentSegment from './CommentSegments';
import getAllComments, { createComment, createReply, deleteComment } from '../redux/actions/commentActions';

export class UserComment extends Component {
  state = {
    success: true,
    errors: {},
  }

  handleCommentSubmit = (data) => {
    const { slug, dispatchCreateComment, getComments } = this.props;
    return dispatchCreateComment(slug, data).then(() => {
      getComments(slug);
    }).catch((err) => {
      this.setState({
        success: false,
        errors: err.response.data.errors,
      });
    });
  }

  handleReplySubmit = (data, commentId) => {
    const { slug, dispatchCreateReply, getComments } = this.props;
    return dispatchCreateReply(slug, commentId, data).then(() => {
      getComments(slug);
      this.setState({
        success: true,
        errors: {},
      });
    }).catch((err) => {
      this.setState({
        success: false,
        errors: err.response.data.errors,
      });
    });
  }

  handleCommentDelete = (id) => {
    const { slug, dispatchDeleteComment, getComments } = this.props;
    return dispatchDeleteComment(slug, id).then(() => {
      getComments(slug);
      this.setState({
        success: true,
        errors: {},
      });
    }).catch((err) => {
      this.setState({
        success: false,
        errors: err.response.data.errors,
      });
    });
  }

  render() {
    const { comments, currentUser } = this.props;
    const { errors, success, message } = this.state;
    return (
      <Container id="comment-section">
        <h2 className="comment-div-header"> Start a discussion, post with kindness</h2>
        <Divider />
        { errors.body ? (
          <Message negative={!success} success={success}>
            <Message.Content>{errors.body ? errors.body : message}</Message.Content>
          </Message>
        ) : null}
        <CommentForm
          disabled={Object.getOwnPropertyNames(currentUser).length <= 0}
          type="Comment"
          btnText="Comment"
          position="right"
          size="small"
          handleSubmit={this.handleCommentSubmit}
        />
        <Divider clearing />
        <Segment.Group>
          {comments ? comments.comments.map(comment => (
            <Fragment key={comment.id}>
              <CommentSegment
                type="comment"
                id={comment.id}
                user={currentUser}
                username={comment.User.username}
                firstname={comment.User.firstname}
                body={comment.body}
                time={comment.createdAt}
                onClick={this.handleCommentDelete}
                imageUrl={comment.User.image
                  ? comment.User.image
                  : 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'}
              />
              <CommentForm
                disabled={Object.getOwnPropertyNames(currentUser).length <= 0}
                commentId={comment.id}
                type="Reply"
                btnText="Reply"
                size="tiny"
                position="right"
                handleSubmit={this.handleReplySubmit}
              />
              <Divider className="clear-both" clearing />
              <Segment.Group className="replies">
                {(comment.Replies).length !== 0 ? comment.Replies.map(reply => (
                  <CommentSegment
                    key={reply.id}
                    type="reply"
                    username={reply.User.firstname || reply.User.username}
                    body={reply.body}
                    time={reply.createdAt}
                    imageUrl={reply.User.image
                      ? reply.User.image
                      : 'https://res.cloudinary.com/blackincode/image/upload/v1536160812/download_dfarj8.png'}
                  />
                )) : <p style={{ color: '#bbb' }}>No replies yet, Be the first to reply</p>}
              </Segment.Group>
            </Fragment>
          )) : null}
        </Segment.Group>


      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export const mapDispatchToProps = dispatch => bindActionCreators(
  {
    getComments: getAllComments,
    dispatchCreateComment: createComment,
    dispatchCreateReply: createReply,
    dispatchDeleteComment: deleteComment,
  },
  dispatch,
);
UserComment.defaultProps = ({
  comments: null,
  currentUser: {},
});


UserComment.propTypes = {
  getComments: PropTypes.func.isRequired,
  dispatchCreateComment: PropTypes.func.isRequired,
  dispatchCreateReply: PropTypes.func.isRequired,
  dispatchDeleteComment: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  comments: PropTypes.shape(),
  currentUser: PropTypes.shape(),
};

const UserCommentWithRedux = connect(mapStateToProps, mapDispatchToProps)(UserComment);

export default UserCommentWithRedux;
